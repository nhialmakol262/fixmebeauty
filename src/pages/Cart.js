import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartSubtotal } = useCart();
  const whatsappNumber = '256781175289';
  const [customerName, setCustomerName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const ugxFormatter = new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleOrderViaWhatsApp = () => {
    const trimmedName = customerName.trim();
    const trimmedLocation = deliveryLocation.trim();
    const trimmedPhone = customerPhone.trim();

    if (!trimmedName || !trimmedLocation || !trimmedPhone) {
      return;
    }

    const itemLines = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} - ${ugxFormatter.format(
            item.price * item.quantity
          )}`
      )
      .join('\n');

    const message = `Hello Fix Me Beauty, I want to place an order:\n\nName: ${trimmedName}\nPhone: ${trimmedPhone}\nDelivery Location: ${trimmedLocation}\n\n${itemLines}\n\nSubtotal: ${ugxFormatter.format(
      cartSubtotal
    )}\n\nPlease assist me with delivery details.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>Review selected items before checkout.</p>
      </div>

      <div className="section-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2>No items yet</h2>
            <p>Add products from the Products page and they will appear here.</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{ugxFormatter.format(item.price)}</p>
                    <div className="quantity-row">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="checkout-fields">
                <h3>Customer Details</h3>
                <div className="checkout-field-grid">
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Your phone number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Delivery location"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                />
              </div>
              <p>
                Subtotal: <strong>{ugxFormatter.format(cartSubtotal)}</strong>
              </p>
              <div className="cart-actions">
                <button
                  type="button"
                  className="order-whatsapp"
                  onClick={handleOrderViaWhatsApp}
                  disabled={!customerName.trim() || !deliveryLocation.trim() || !customerPhone.trim()}
                >
                  Order via WhatsApp
                </button>
                <button type="button" className="clear-cart" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
