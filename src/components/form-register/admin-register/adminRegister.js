import { useState } from "react";
import Axios from "axios";
import './adminRegister.css';

export default function RegisterAdmin() {
  const [values, setValues] = useState();
  const [adminInfo, setAdminInfo] = useState([]);
  const handleChanges = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const submitRegistration = () => {
    Axios.post("http://localhost:3001/register-admin", {
      nome: values.nome,
      usuario: values.usuario,
      senha: values.senha,
      pin: values.pin,
    })
    .then((response) => setAdminInfo(response.data))
    .catch(/*TODO*/)
  };

  console.log(values);

  return (
    <div className="container">
      <div className="adm-reg">
      <h1 className="titleRegister">Cadastrar um administrador</h1>
      <label>Nome</label>
      <input
        type="text"
        className="registerAdmin-input"
        name="nome"
        onChange={handleChanges}
      />
      <label>Usuario</label>
      <input
        type="text"
        className="registerAdmin-input"
        name="usuario"
        onChange={handleChanges}
      />
      <label>Senha</label>
      <input
        type="text"
        className="registerAdmin-input"
        name="senha"
        onChange={handleChanges}
      />
      <label>PIN</label>
      <input
        type="text"
        className="registerAdmin-input"
        name="pin"
        onChange={handleChanges}
      />
    <button className="btn-adminregister" onClick={() => submitRegistration()}>Cadastrar</button>
      </div>
    </div>
  );
}
