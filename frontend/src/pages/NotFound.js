import React from 'react';

import style from './styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1>Error 404</h1>
      <p>Página não encontrada.</p>
    </div>
  );
}
