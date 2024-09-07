import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!username || !email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Verificar se o usuário já existe
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      setError('Este e-mail já está cadastrado');
      return;
    }

    // Adicionar o novo usuário ao localStorage
    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirecionar para a página de login
    navigate('/login');
  };

  return (
    <div className="bg-signup">
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        {error && <p className="error">{error}</p>}
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
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
