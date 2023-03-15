import React from 'react';

import './home.css';

import FormLogin from '../form-login/form-login';
import FormRegister from '../form-register/form-register';

export default function Home() {
  return (
    <div className="homeDiv">
      <FormLogin />
    </div>
  );
}
