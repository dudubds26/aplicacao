import React, { useState, useEffect } from 'react';
import './css/Checkout.css';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'creditCard', // Opções: 'creditCard', 'paypal', etc.
  });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.address) {
      alert('Por favor, preencha todos os campos de envio.');
      return;
    }
    
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-details">
        <h3>Informações de Envio</h3>
        <form className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
            <option value="creditCard">Cartão de Crédito</option>
            <option value="paypal">PayPal</option>
          </select>
        </form>

        <h3>Itens no Carrinho</h3>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.price}
              </li>
            ))}
          </ul>
        )}

        <button className="checkout-button" onClick={handleCheckout}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Checkout;
