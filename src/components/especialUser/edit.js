import React, { useEffect, useMemo } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './especial.css';

export default function Edit() {
  const [values, setValues] = React.useState();
  const [data, setData] = React.useState([]);

  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/especial/edit', {
      _id: state._id,
      name: values.name,
      email: values.email,
      senha: values.senha,
    })
      .then((response) => {
        setData(response.data.users);
      });

    navigate('/especial');
  };

  return (
    <div>
      <form action="#" className="form-edit" name="formEdit">
        <h1>{`Olá ${state.name}, oque deseja alterar?`}</h1>
        <input
          type="text"
          className="edit-input"
          name="name"
          placeholder="Nome"
          onChange={handleChanges}
        />
        <input
          type="text"
          className="edit-input"
          name="email"
          placeholder="E-mail"
          onChange={handleChanges}
        />
        <input
          type="text"
          className="edit-input"
          name="senha"
          placeholder="Senha"
          onChange={handleChanges}
        />
        <button className="btn-edit" type="button" onClick={() => handleSubmit()}>Enviar</button>
      </form>

    </div>
  );
}
