import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="bg-login">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Entrar</button>
        <p className="signup-link">
          Não tem uma conta? <Link className='signup-btn' to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
