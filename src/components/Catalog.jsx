import React, { useState } from 'react';
import './css/Catalog.css';
import Logo from '../assets/logo-com-fagro.svg'
import { Link } from 'react-router-dom'
import morango from '../assets/morango.webp'

const Catalog = () => {
  // Exemplo de lista de produtos
  const products = [
    { id: 1, name: 'Morango', price: 'R$ 100,00', img: morango },
    { id: 2, name: 'Banana', price: 'R$ 200,00', img: '' },
    { id: 4, name: 'Maçã', price: 'R$ 300,00', img: '' },
    { id: 5, name: 'Tomate', price: 'R$ 300,00', img: '' },
    { id: 6, name: 'Mandioca', price: 'R$ 300,00', img: '' },
    { id: 7, name: 'Ovo Caipira', price: 'R$ 300,00', img: '' },
    { id: 8, name: 'Abacaxi', price: 'R$ 300,00', img: '' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(term)
      )
    );
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(product);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Produto adicionado ao carrinho!');
  };

  return (
    <div className="catalog-container">
      <div className="catalog-header">
      <div className="left-catalog">
            <div>
              <img src={Logo} alt="logo" className="logo" />
            </div>
            <nav>
              <ul className="nav-catalog">
                <li><a href="#">Início</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Promoções</a></li>
              </ul>
            </nav>
          </div>
          <div className="right-catalog">
            <Link to={'/cart'}>
            <span class="material-symbols-outlined symbol-cart"> shopping_cart </span>
            </Link>
            <div className="search-container">
            <input type="text" placeholder="Pesquisar produtos..." value={searchTerm} onChange={handleSearch} className="search-bar" 
            />
            <span className="material-symbols-outlined search-icon">search</span>
          </div>
          </div>
      </div>
      

      <div className="catalog-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="catalog-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img src={product.img} alt="" />
            <button className="buy-button" onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
