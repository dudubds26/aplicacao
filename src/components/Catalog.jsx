import React, { useState, useEffect } from 'react';
import './css/Catalog.css';
import Logo from '../assets/logo-com-fagro.svg';
import { Link } from 'react-router-dom';
import morango from '../assets/morango.png';
import batata from '../assets/batata.png';
import ovo from '../assets/ovo.png';
import abacaxi from '../assets/abacaxi.png';
import mandioca from '../assets/mandioca.png';
import tomate from '../assets/tomate.png';
import maca from '../assets/maca.png';
import banana from '../assets/banana.png';

const Catalog = () => {
  const products = [
    { id: 1, name: 'Morango', price: 'R$ 24,00 (1kg)', img: morango, produtor: 'Produtor' },
    { id: 2, name: 'Banana', price: 'R$ 15,99 (1kg)', img: banana, produtor: 'Produtor' },
    { id: 4, name: 'Maçã', price: 'R$ 11,99 (1kg)', img: maca, produtor: 'Produtor' },
    { id: 5, name: 'Tomate', price: 'R$ 6,98 (1kg)', img: tomate, produtor: 'Produtor' },
    { id: 6, name: 'Mandioca', price: 'R$ 2,99 (1kg)', img: mandioca, produtor: 'Produtor' },
    { id: 7, name: 'Ovo Caipira', price: 'R$ 8,49 (12 un.)', img: ovo, produtor: 'Produtor' },
    { id: 8, name: 'Abacaxi', price: 'R$ 11,99 (1 un.)', img: abacaxi, produtor: 'Produtor' },
    { id: 9, name: 'Batata', price: 'R$ 6,65 (1kg)', img: batata, produtor: 'Produtor' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = existingCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, []);

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
    const productIndex = existingCart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    const totalCount = existingCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
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
          <Link to={'/cart'} className="cart-link">
            <span className="material-symbols-outlined symbol-cart">shopping_cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar produtos..." value={searchTerm} onChange={handleSearch} className="search-bar" />
            <span className="material-symbols-outlined search-icon">search</span>
          </div>
        </div>
      </div>

      <div className="catalog-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="catalog-item">
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name} />
            <p className='price'>{product.price}</p>
            <p>{product.produtor}</p>
            <button className="buy-button" onClick={() => addToCart(product)}>
              Adicionar ao Carrinho <span className="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
