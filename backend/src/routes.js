import express from 'express';

import ToDoController from './controllers/ToDoController.js';

const routes = express.Router();

routes.get('/todos', ToDoController.getTodos);
routes.post('/add-todo', ToDoController.addTodo);
routes.put('/update-todo/:id', ToDoController.updateTodo);
routes.delete('/delete-todo/:id', ToDoController.deleteTodo);

export default routes;
