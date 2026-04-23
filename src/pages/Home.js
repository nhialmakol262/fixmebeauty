import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const featuredProducts = [
    { id: 1, name: 'Argan Hair Oil', price: '$18.99', desc: 'Nourishing oil for silky smooth hair' },
    { id: 2, name: 'Herbal Shampoo', price: '$14.50', desc: 'Gentle cleanse with natural extracts' },
    { id: 3, name: 'Glow Face Cream', price: '$22.00', desc: 'Hydrating cream for radiant skin' },
    { id: 4, name: 'Lip Care Balm', price: '$8.99', desc: 'Soft, moisturized lips all day' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fix Me Beauty & Hair Products</h1>
          <p className="hero-subtitle">Discover the beauty within you with our natural, premium-quality beauty and hair care solutions.</p>
          <Link to="/products" className="hero-btn">Explore Products</Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="section-container">
          <h2>Our Mission</h2>
          <p>
            At Fix Me Beauty, we believe everyone deserves to feel confident and beautiful in their own skin.
            Our mission is to promote natural beauty and self-care by offering carefully curated products made
            with high-quality, nourishing ingredients. We are committed to helping you look and feel your best,
            every single day.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="section-container">
          <h2>Featured Products</h2>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="featured-img-placeholder">
                  <span>{product.name.charAt(0)}</span>
                </div>
                <h3>{product.name}</h3>
                <p className="featured-desc">{product.desc}</p>
                <p className="featured-price">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="featured-cta">
            <Link to="/products" className="btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers">
        <div className="section-container">
          <h2>Special Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>Buy 2 Get 1 Free</h3>
              <p>On all hair care products this month. Stock up on your favorites!</p>
            </div>
            <div className="offer-card highlight">
              <h3>20% Off First Order</h3>
              <p>New customers enjoy 20% off their first purchase. Use code: FIXME20</p>
            </div>
            <div className="offer-card">
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50. Beauty delivered to your door.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
