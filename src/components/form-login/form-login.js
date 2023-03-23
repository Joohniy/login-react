import React, { useEffect } from 'react';

import Axios from 'axios';
import Cookies from 'universal-cookie';

import { useNavigate, useLocation } from 'react-router-dom';

import './form-login.css';

export default function FormLogin() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const cookies = new Cookies();

  const [values, setValues] = React.useState();
  const [user, setUser] = React.useState([]);
  const [token, setToken] = React.useState();

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleLogin = () => {
    Axios.post('http://localhost:3001/login', {
      email: values.email,
      senha: values.senha,
    }, {
      headers: { authorization: `${token}` },
    }, {
      withCredentials: true,
    })
      .then((res) => {
        setUser(res.data.users);
        setToken(res.data.token);
      })
      .catch((e) => { console.log(e, 'Algo deu errado...'); });
  };

  useEffect(() => {
    cookies.set('token', token, {
      path: '/',
      maxAge: 3600,
    });
  });

  useEffect(() => {
    if (user._id) {
      navigate({
        pathname: '/users/id',
        search: `${user._id}`,
      }, { state: { saudacao: `Olá ${user.name}`, authToken: `${token}` } });
    } else {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="div-login">
      <h1 className="titleLogin">Login</h1>
      <form action="#" className="form-login" name="formlog">
        <input
          type="text"
          className="login-input"
          name="email"
          placeholder="E-mail"
          onChange={handleChanges}
        />
        <input
          type="text"
          className="login-input"
          name="senha"
          placeholder="Senha"
          onChange={handleChanges}
        />
        <button className="btn-login" type="button" onClick={() => handleLogin()}>Entrar</button>
      </form>
      <p>
        Não tem uma conta?
        <a href="/register"> Registre-se</a>
      </p>
    </div>

  );
}
