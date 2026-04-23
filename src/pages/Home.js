import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const featuredProducts = [
    { id: 1, name: 'Argan Hair Oil', price: '40,000 Shs', desc: 'Nourishing oil for silky smooth hair', image: '/Images/hair growth oil.jpg' },
    { id: 2, name: 'Herbal Shampoo', price: '25,000 Shs', desc: 'Gentle cleanse with natural extracts', image: '/Images/shampo flavour 1.jpg' },
    { id: 3, name: 'Glow Face Cream', price: '50,000 Shs', desc: 'Hydrating cream for radiant skin', image: '/Images/coconut butter.jpg' },
    { id: 4, name: 'Face Care Balm', price: '15,000 shs', desc: 'Soft, moisturized faces all day', image: '/Images/hair butter.jpg' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(4,120,87,0.92) 0%, rgba(5,150,105,0.88) 100%), url('/Images/cover image ein home page.jpg')` }}>
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

      {/* Showcase Image Section */}
      <section className="showcase">
        <div className="section-container showcase-grid">
          <div className="showcase-image">
            <img src="/Images/home page.jpg" alt="Fix Me Beauty Products" />
          </div>
          <div className="showcase-text">
            <h2>Natural Beauty, Real Results</h2>
            <p>
              Our products are crafted with love and science to bring out your natural glow. From nourishing hair oils to rejuvenating face creams, every item is designed to make you feel confident and radiant.
            </p>
            <Link to="/about" className="btn-secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="section-container">
          <h2>Featured Products</h2>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="featured-img-wrapper">
                  <img src={product.image} alt={product.name} />
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
