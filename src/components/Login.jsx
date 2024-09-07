import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError('Email ou senha incorretos');
      return;
    }

    localStorage.setItem('authToken', JSON.stringify({ email }));

    navigate('/catalog');
  };

  return (
    <div className="bg-login">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
