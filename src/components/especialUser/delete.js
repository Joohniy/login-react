import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './especial.css';

export default function Delete() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.post('http://localhost:3001/especial/delete', {
      _id: state._id,
    });
    navigate('/especial');
  });

  return (
    <h1>Usuário deletado</h1>
  );
}
