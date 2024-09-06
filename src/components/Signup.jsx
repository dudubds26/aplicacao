import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de cadastro
    console.log('Nome de Usuário:', username);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className='bg-signup'>
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <div className="input-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="signup-button">Cadastrar</button>
        <p className="login-link">
          Já tem uma conta? <Link className='login-btn' to="/login">Faça login</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
