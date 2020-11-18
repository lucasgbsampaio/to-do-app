import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const ToDoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },

  { timestamps: true }
);

export const UserModel = mongoose.model('UserModel', UserSchema);
export const ToDoModel = mongoose.model('ToDoModel', ToDoSchema);
