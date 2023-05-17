import React, { useState } from "react";

import Axios from 'axios';

export default function AdminLogin() {
  const [values, setValues] = useState();
  const [adminUser, setAdminUser] = useState([]);

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  function logIn() {
    Axios.post('http://localhost:3001/login-admin', {
      usuario: values.usuario,
      senha: values.senha,
      pin: values.pin,
    })
    .then((response) => setAdminUser(response.data))
    .catch(/*TODO*/)
  }

  console.log(adminUser);

  return (
    <div>
      <h1>Login administraçao</h1>
      <label>Usuário</label>
      <input
        type="email"
        className="login-input"
        name="usuario"
        onChange={handleChanges}
      />
      <label>Senha</label>
      <input
        type="email"
        className="login-input"
        name="senha"
        onChange={handleChanges}
      />
      <label>PIN</label>
      <input
        type="email"
        className="login-input"
        name="pin"
        onChange={handleChanges}
      />
      <button onClick={() => logIn()} >Login</button>
    </div>
  );
}
