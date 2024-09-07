import React, { useState, useEffect } from 'react';
import './css/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
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

  return (
    <div className="cart-container">
      <h2>Meu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remover
              </button>
            </div>
          ))}
          <button className="clear-button" onClick={clearCart}>
            Limpar Carrinho
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
