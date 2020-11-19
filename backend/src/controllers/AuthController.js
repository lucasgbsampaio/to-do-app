import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { UserModel } from '../models/ToDoModel.js';

dotenv.config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.APP_SECRET, {
    expiresIn: 86400,
  });
}

export default {
  async register(req, res) {
    const { username, password } = req.body;

    try {
      const result = await UserModel.findOne({ username });

      if (result) {
        res.status(400).send({ error: 'Usuário já existe' });
      }

      const user = await UserModel.create({ username, password });

      if (!user) {
        res.status(400).send({ error: 'Campos vazios' });
      }

      user.password = undefined;

      res.status(200).send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (error) {
      res.status(400).send({ error: 'Campos vazios' });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserModel.findOne({ username }).select('+password');

      if (!user) {
        res.status(400).send({ error: 'Dados inválidos' });
      }

      const userMatch = await bcrypt.compare(password, user.password);

      if (!userMatch) {
        res.status(400).send({ error: 'Dados inválidos' });
      }

      user.password = undefined;

      res.status(200).send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (error) {
      res.status(400).send({ error: 'Erro ao entrar' });
    }
  },
};
