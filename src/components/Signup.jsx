import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h1>Página de Cadastro</h1>
      <Link to="/">Voltar para Home</Link>
      <Link to="/login">Voltar para Login</Link>
    </div>
  );
};

export default Signup;
