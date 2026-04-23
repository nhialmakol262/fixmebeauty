import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'hair-oil', label: 'Hair Oils' },
    { id: 'shampoo', label: 'Shampoos' },
    { id: 'conditioner', label: 'Conditioners' },
    { id: 'face-cream', label: 'Face Creams' },
    { id: 'lip-care', label: 'Lip Care' },
  ];

  const products = [
    {
      id: 1,
      name: 'Argan Hair Oil',
      category: 'hair-oil',
      price: 18.99,
      desc: 'Rich in vitamins and antioxidants, this argan oil deeply nourishes and restores shine to dry, damaged hair.',
    },
    {
      id: 2,
      name: 'Coconut Hair Oil',
      category: 'hair-oil',
      price: 14.99,
      desc: 'Pure coconut oil that strengthens hair roots, reduces breakage, and promotes healthy growth.',
    },
    {
      id: 3,
      name: 'Herbal Growth Oil',
      category: 'hair-oil',
      price: 21.50,
      desc: 'A blend of natural herbs and essential oils designed to stimulate hair growth and thickness.',
    },
    {
      id: 4,
      name: 'Silk Smooth Shampoo',
      category: 'shampoo',
      price: 14.50,
      desc: 'Gentle cleansing formula with silk proteins that leaves hair soft, smooth, and manageable.',
    },
    {
      id: 5,
      name: 'Anti-Dandruff Shampoo',
      category: 'shampoo',
      price: 16.00,
      desc: 'Clinically proven to fight dandruff while soothing the scalp with tea tree and peppermint.',
    },
    {
      id: 6,
      name: 'Volume Boost Shampoo',
      category: 'shampoo',
      price: 15.50,
      desc: 'Adds body and fullness to fine, limp hair without weighing it down.',
    },
    {
      id: 7,
      name: 'Deep Repair Conditioner',
      category: 'conditioner',
      price: 16.99,
      desc: 'Intensive conditioning treatment that repairs split ends and restores moisture balance.',
    },
    {
      id: 8,
      name: 'Color Protect Conditioner',
      category: 'conditioner',
      price: 17.50,
      desc: 'Specially formulated to protect color-treated hair and extend vibrancy between salon visits.',
    },
    {
      id: 9,
      name: 'Hydrating Glow Cream',
      category: 'face-cream',
      price: 22.00,
      desc: 'Lightweight, non-greasy moisturizer that hydrates and gives your skin a natural, healthy glow.',
    },
    {
      id: 10,
      name: 'Night Repair Cream',
      category: 'face-cream',
      price: 28.00,
      desc: 'Rich night cream that works while you sleep to repair and rejuvenate tired skin.',
    },
    {
      id: 11,
      name: 'Vitamin C Brightening Cream',
      category: 'face-cream',
      price: 24.99,
      desc: 'Packed with Vitamin C to brighten skin tone, reduce dark spots, and boost radiance.',
    },
    {
      id: 12,
      name: 'Shea Butter Lip Balm',
      category: 'lip-care',
      price: 8.99,
      desc: 'Ultra-moisturizing lip balm with shea butter and vitamin E for soft, supple lips.',
    },
    {
      id: 13,
      name: 'Tinted Lip Care',
      category: 'lip-care',
      price: 10.50,
      desc: 'A hint of color combined with deep hydration for beautiful, healthy-looking lips.',
    },
    {
      id: 14,
      name: 'Exfoliating Lip Scrub',
      category: 'lip-care',
      price: 9.99,
      desc: 'Gentle sugar scrub that removes dry skin and leaves lips smooth and kissable.',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of beauty and hair care products crafted with care.</p>
      </div>

      <div className="section-container">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-placeholder">
                <span>{product.name.charAt(0)}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
