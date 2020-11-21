import React from 'react';

import Form from '../components/Form';

import style from './styles/Login.module.css';

export default function Login() {
  return <Form className={style.contentMain} type="Entrar" />;
}
