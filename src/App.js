import React from 'react';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Home from './components/Home/home';
import FormRegister from './components/form-register/form-register';
import FormLogin from './components/form-login/form-login';
import Users from './components/Users/users';
import EspecialUser from './components/especialUser/especialUser';
import Edit from './components/especialUser/edit';
import Delete from './components/especialUser/delete';
import RegisterAdmin from './components/form-register/admin-register/adminRegister';
import AdminLogin from './components/form-login/admin-login/adminLogin';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/users/id" element={<Users />} />
          <Route path="/register-admin" element={<RegisterAdmin />} />
          <Route path="/login-admin" element={<AdminLogin />} />
          <Route path="/especial" element={<EspecialUser />} />
          <Route path="/especial/edit" element={<Edit />} />
          <Route path="/especial/delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
