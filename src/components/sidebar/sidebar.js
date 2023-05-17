import React from 'react';

import { useNavigate } from 'react-router-dom';

import Cookie from 'universal-cookie';

import './sidebar.css';

export default function Sidebar() {
  const navigate = useNavigate();
  const cookies = new Cookie();

  const logOut = async () => {
    cookies.remove('token', { path: '/' });
    navigate('/');
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <span className="menu">Menu</span>
        <a href="/especial" className="sidebar-links">Users</a>
        <a className="sidebar-links">Gostos</a>
        <a className="sidebar-links">Musicas</a>
        <a className="sidebar-links">Livros</a>
        <button onClick={() => logOut()} type="button" className="btn-logout">Logout</button>
      </div>
    </div>
  );
}
