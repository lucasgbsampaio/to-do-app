import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import routes from './routes.js';

dotenv.config();

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.use('/api', routes);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@todo-cluster.i93aw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const { connection } = mongoose;

connection.once('open', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Conexão com banco de dados realizada');
  }
});

app.listen(process.env.PORT || 8080, () => console.log('Server iniciado'));
