import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './form-register.css';

export default function FormRegister() {
  const [values, setValues] = React.useState();
  const [data, setData] = React.useState([]);

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      email: values.email,
      senha: values.senha,
    })
      .then((response) => {
        setData(response);
      })
      .catch((e) => { console.log(e, 'Algo deu errado...'); });
  };

  return (
    <div className="container">
      <div className="div-register">
        <h1 className="titleRegister">Registrar</h1>
        <form action="#" className="form-register" name="formreg">
          <input
            type="text"
            className="register-input"
            name="name"
            placeholder="Nome"
            onChange={handleChanges}
          />
          <input
            type="text"
            className="register-input"
            name="email"
            placeholder="E-mail"
            onChange={handleChanges}
          />
          <input
            type="text"
            className="register-input"
            name="senha"
            placeholder="Senha"
            onChange={handleChanges}
          />
          <button className="btn-register" type="button" onClick={() => handleSubmit()}>Enviar</button>
          <p>
            Já tem uma conta? Faça
            <a href="/"> Login</a>
          </p>
        </form>
      </div>
    </div>

  );
}
