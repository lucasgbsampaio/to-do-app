import React from 'react';

import Form from '../components/Form';

import style from './styles/Register.module.css';

export default function Register() {
  return (
    <div className={style.contentMainRegister}>
      <div className={style.wrapperRegister}>
        <Form type="Registrar" />
      </div>
    </div>
  );
}
