import React from 'react';

import style from './styles/ToDoItem.module.css';

export default function ToDoItem({ data }) {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.checkbox}>X</div>

        <div className={style.mainContent}>
          <label htmlFor="content">
            <input type="text" value={data.name} disabled />
          </label>

          <input
            type="text"
            id="content"
            name="content"
            value={data.description}
            disabled
          />
        </div>
      </div>

      <div>
        <input type="button" value="X" />
      </div>
    </div>
  );
}
