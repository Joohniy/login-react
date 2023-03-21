import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './users.css';

import Sidebar from '../sidebar/sidebar';

export default function Users() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = React.useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/users/id', {
      headers: { authorization: `${state.authToken}` },
    })
      .then((response) => {
        setData(response.data.users);
      });
  }, [data]);

  return (
    <div>
      <Sidebar />
      <h1>{state.saudacao}</h1>
    </div>
  );
}
