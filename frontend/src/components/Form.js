import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { USER_CREATE, USER_LOGIN } from '../services/api';

import style from './styles/Form.module.css';

export default function Form({ type }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (type === 'Registrar') {
        setError(null);
        setLoading(true);

        const { url, options } = USER_CREATE({ username, password });
        const res = await fetch(url, options);
        const json = await res.json();
        if (!res.ok) throw new Error(json.error);

        window.localStorage.setItem('token', json.token);

        navigate('/to-do');
      } else {
        setError(null);
        setLoading(true);

        const { url, options } = USER_LOGIN({ username, password });
        const res = await fetch(url, options);
        const json = await res.json();

        if (!res.ok) throw new Error(json.error);

        window.localStorage.setItem('token', json.token);

        navigate('/to-do');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={style.wrapper}
      style={{
        width: '90%',
        maxWidth: '750px',
        height: '90%',
        maxHeight: '400px',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        margin: '0px 20px',
        backgroundColor: '#fff',
        borderRadius: '7px',
        color: 'black',
      }}
    >
      <h1>{type}</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className={style.label} htmlFor="username">
            Usuário:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div>
          <label className={style.label} htmlFor="password">
            Senha:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <div>
          {!loading ? (
            <input type="submit" value={type} />
          ) : (
            <input
              style={{
                fontSize: '16px',
                opacity: '0.5',
                cursor: 'not-allowed',
              }}
              readOnly
              type="submit"
              value="Carregando..."
            />
          )}
          {error && (
            <span style={{ marginLeft: '15px', fontSize: '14px' }}>
              {error}
            </span>
          )}
        </div>

        {type === 'Entrar' ? (
          <NavLink to="/register">Não possui uma conta?</NavLink>
        ) : (
          <NavLink to="/login">Já possui uma conta?</NavLink>
        )}
      </form>
    </div>
  );
}
