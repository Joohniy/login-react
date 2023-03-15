import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './especial.css';

export default function EspecialUser() {
  const [data, setData] = React.useState([]);

  const navigate = useNavigate();
  const state = useLocation();

  useEffect(() => {
    Axios.get('http://localhost:3001/especial')
      .then((response) => {
        setData(response.data.users);
      });
  });

  const toEdit = (dataUsers) => {
    navigate({
      pathname: '/especial/edit',
      search: `${dataUsers._id}`,
    }, { state: dataUsers });
  };

  const toDelete = (dataUsers) => {
    navigate({
      pathname: '/especial/delete',
    }, { state: dataUsers });
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Senha</th>
            <th>Editar ou Excluir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dbFields, key) => {
            return (
              <tr key={key}>
                <td>{dbFields._id}</td>
                <td>{dbFields.name}</td>
                <td>{dbFields.email}</td>
                <td>{dbFields.senha}</td>
                <td>
                  <button type="button" onClick={() => toEdit(dbFields)}>Editar</button>
                  <button type="button" onClick={() => toDelete(dbFields)}>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/"><h3>Voltar</h3></a>
    </div>
  );
}
