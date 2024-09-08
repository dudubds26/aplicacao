import React, { useState, useEffect } from 'react';
import './css/Cart.css';
import {Link} from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueItems = storedCartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    setCartItems(uniqueItems);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart-container">
      <h2>Meu Carrinho</h2>
      <div className="cart">
        {cartItems.length === 0 ? (
          <p className="empty-message">Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-content">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Remover <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            ))}
            <Link to={'/checkout'} className="clear-button" >Comprar Agora</Link>
            <button className="clear-button" onClick={clearCart}>
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
