import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import Logo from '../assets/logo-com-fagro.svg';
import Logo2 from '../assets/logo-sem-fagro.svg';

const Home = () => {
  return (
    <>
      <div className="home">
        <header className='home-header'>

          <div className="left-home">
            <div>
              <img src={Logo} alt="logo" className="logo" />
            </div>
            <nav>
              <ul className="nav-home">
                <li><a href="#">Agricultor</a></li>
                <li><a href="#">Entregador</a></li>
                <li><a href="#">Quem somos?</a></li>
              </ul>
            </nav>
          </div>
          <div className="right-home">
            <a href="">Entrar como vendedor</a>
          </div>

        </header>

        <main className='main-home'>
          <div>
            <img src={Logo2} alt="logo" />
          </div>

          <h1>Colhido com Amor, <br /> Entregue com Carinho.</h1>

          <div className="buttons">
            <Link to="/login" className='btn'>Login</Link>
            <Link to="/signup" className='btn'>Cadastre-se</Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
