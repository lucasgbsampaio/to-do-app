import React from 'react';
import { NavLink } from 'react-router-dom';

import icon from '../assets/icon.svg';

import style from './styles/Homepage.module.css';

export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <header>
          <img className={style.icon} src={icon} alt="to-do-icon" />
          <span className={style.name}>To-Do List</span>
        </header>

        <main>
          <h1>Organize tudo com o To-Do List</h1>

          <p>
            Recupere a clareza e a tranquilidade, tirando todas essas tarefas da
            sua cabeça e colocando na sua lista de tarefas.
          </p>
          <div>
            <NavLink to="/login">Entrar</NavLink>
            <NavLink to="/register">Registrar</NavLink>
          </div>
        </main>
      </div>
    </div>
  );
}
