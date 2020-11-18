import React from 'react';

import ToDoItem from '../components/ToDoItem';
import { TODOS_GET, TODO_POST } from '../services/api';

import style from './styles/ToDoList.module.css';

export default function ToDoList() {
  const [description, setDescription] = React.useState('');
  const [toDos, setToDos] = React.useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = TODO_POST({ description });
    const res = await fetch(url, options);
    const json = await res.json();

    setToDos([...toDos, ...json]);
  }

  React.useEffect(() => {
    async function getToDos() {
      const { url, options } = TODOS_GET();
      const res = await fetch(url, options);
      const json = await res.json();

      setToDos(json);
    }
    getToDos();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>To-Do List</h1>

        <form onSubmit={handleSubmit} autocomplete="off">
          <label htmlFor="description">Tarefa:</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Adicione uma tarefa..."
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />

          <input className={style.submit} type="submit" value="Adicionar" />
        </form>

        <div className={style.mainContent}>
          {toDos &&
            toDos.map((todo) => {
              return <ToDoItem key={todo._id} data={todo} />;
            })}
        </div>
      </div>
    </div>
  );
}
