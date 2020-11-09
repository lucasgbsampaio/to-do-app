import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ToDoModel',
    },
  ],
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const ToDoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },

  { timestamps: true }
);

const UserModel = model('UserModel', UserSchema);
const ToDoModel = model('ToDoModel', ToDoSchema);

export default { UserModel, ToDoModel };
