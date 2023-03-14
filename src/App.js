import React from 'react';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Home from './components/Home/home';
import FormRegister from './components/form-register/form-register';
import FormLogin from './components/form-login/form-login';
import Users from './components/Users/users';
import EspecialUser from './components/especialUser/especialUser';
import Edit from './components/especialUser/edit';
import Delete from './components/especialUser/delete';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/users/id" element={<Users />} />
          <Route path="/especial" element={<EspecialUser />} />
          <Route path="/especial/edit" element={<Edit />} />
          <Route path="/especial/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
