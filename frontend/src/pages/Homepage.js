import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './styles/Homepage.module.css';

import illustation from '../assets/homepage-illustration.svg';
import clipboard from '../assets/clipboard.svg';

export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img className={style.icon} src={clipboard} alt="to-do-icon" />

        <main>
          <h1>Testando aqui</h1>
          <p>Testando aqui também</p>
        </main>

        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/register">Registrar</NavLink>

        <img className={style.bg} src={illustation} alt="" />
      </div>
    </div>
  );
}
