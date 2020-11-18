import React from 'react';

import style from './styles/ToDoItem.module.css';

export default function ToDoItem({ data }) {
  return (
    <div className={style.content}>
      <input type="checkbox" />

      <div className={style.description}>{data.description}</div>

      <input type="button" value="X" />
    </div>
  );
}
