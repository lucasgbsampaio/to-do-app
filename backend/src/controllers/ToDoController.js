import { ToDoModel } from '../models/ToDoModel.js';

export default {
  async getTodos(req, res) {
    try {
      const toDos = await ToDoModel.find({ userId: req.userId });

      return res.status(200).send(toDos);
    } catch (error) {
      res.status(400).send({ error: 'Error showing ToDos' });
    }
  },

  async addTodo(req, res) {
    const { name, description, status } = req.body;
    try {
      const toDo = await ToDoModel.create({
        name,
        description,
        status,
        userId: req.userId,
      });

      return res.status(200).send({ toDo });
    } catch (error) {
      res.status(400).send({ error: 'Error creating new ToDo' });
    }
  },

  async updateTodo(req, res) {
    const { id } = req.params;

    try {
      const toDo = await ToDoModel.findOneAndUpdate(id, req.body, {
        new: true,
      });

      return res.status(200).send({ toDo });
    } catch (error) {
      res.status(400).send({ error: 'Error updating new ToDo' });
    }
  },

  async deleteTodo(req, res) {
    const { id } = req.params;

    try {
      await ToDoModel.findOneAndDelete(id);

      return res.status(200).send();
    } catch (error) {
      res.status(400).send({ error: 'Error deleting new ToDo' });
    }
  },
};
