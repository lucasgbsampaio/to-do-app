import React from 'react';

import Form from '../components/Form';

import style from './styles/Login.module.css';

export default function Login() {
  return (
    <div className={style.contentMainLogin}>
      <Form type="Entrar" />
    </div>
  );
}
