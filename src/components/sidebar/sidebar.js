import React, { useEffect } from 'react';

import Axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';

import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <span className="menu">Menu</span>
        <a href="/especial" className="sidebar-links">Users</a>
        <a className="sidebar-links">Gostos preferidos</a>
        <a className="sidebar-links">Musicas</a>
        <a className="sidebar-links">Livros</a>
      </div>
    </div>
  );
}
