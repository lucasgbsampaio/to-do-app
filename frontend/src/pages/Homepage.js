import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './styles/Homepage.module.css';

import illustation from '../assets/homepage-illustration.svg';
import clipboard from '../assets/clipboard.svg';

export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <img className={style.icon} src={clipboard} alt="to-do-icon" />
          <span>To-do List</span>

          <main>
            <h1>Organize tudo com o To-do List</h1>

            <p>
              Recupere a clareza e a tranquilidade, tirando todas essas tarefas
              da sua cabeça e colocando na sua lista de tarefas.
            </p>

            <NavLink to="/login">Entrar</NavLink>
            <NavLink to="/register">Registrar</NavLink>
          </main>
        </div>

        <img className={style.bg} src={illustation} alt="illustration" />
      </div>
    </div>
  );
}
