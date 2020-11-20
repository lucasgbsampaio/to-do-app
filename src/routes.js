import express from 'express';

import authMiddleware from './middlewares/auth.js';

import AuthController from './controllers/AuthController.js';
import ToDoController from './controllers/ToDoController.js';

const routes = express.Router();

routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

routes.use(authMiddleware);
routes.get('/todos', ToDoController.getTodos);
routes.post('/add-todo', ToDoController.addTodo);
routes.put('/update-todo/:id', ToDoController.updateTodo);
routes.delete('/delete-todo/:id', ToDoController.deleteTodo);

export default routes;
