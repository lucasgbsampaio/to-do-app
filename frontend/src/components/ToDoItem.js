import React from 'react';

import { TODO_DELETE } from '../services/api';

import iconDelete from '../assets/delete.svg';
import style from './styles/ToDoItem.module.css';

export default function ToDoItem({ data, handleUpdate }) {
  async function handleDelete() {
    const { url, options } = TODO_DELETE(data._id);
    const res = await fetch(url, options);

    if (res.ok) window.location.reload();
  }

  return (
    <div className={style.content}>
      <div
        onClick={() => {
          handleUpdate({ status: !data.status }, data._id);
        }}
        className={style.checkbox}
      >
        {data.status ? <span>&#x2714;</span> : null}
      </div>

      <div className={style.description}>{data.description}</div>

      <img onClick={handleDelete} src={iconDelete} alt="delete" />
    </div>
  );
}
