import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { useCart } from '../context/CartContext';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, cartCount } = useCart();

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
      price: '40000 Shs' ,
      desc: 'Rich in vitamins and antioxidants, this argan oil deeply nourishes and restores shine to dry, damaged hair.',
      image: '/Images/hair growth oil.jpg',
    },
    {
      id: 2,
      name: 'Coconut Hair Oil',
      category: 'hair-oil',
      price: '25000 Shs',
      desc: 'Pure coconut oil that strengthens hair roots, reduces breakage, and promotes healthy growth.',
      image: '/Images/coconut butter.jpg',
    },
    {
      id: 3,
      name: 'Herbal Growth Oil',
      category: 'hair-oil',
      price: '50000 Shs',
      desc: 'A blend of natural herbs and essential oils designed to stimulate hair growth and thickness.',
      image: '/Images/hair growth oil.jpg',
    },
    {
      id: 4,
      name: 'Silk Smooth Shampoo',
      category: 'shampoo',
      price: 30000,
      desc: 'Gentle cleansing formula with silk proteins that leaves hair soft, smooth, and manageable.',
      image: '/Images/shampo flavour 1.jpg',
    },
    {
      id: 5,
      name: 'Anti-Dandruff Shampoo',
      category: 'shampoo',
      price: 16000,
      desc: 'Clinically proven to fight dandruff while soothing the scalp with tea tree and peppermint.',
      image: '/Images/shamo flavor 2.jpg',
    },
    {
      id: 6,
      name: 'Volume Boost Shampoo',
      category: 'shampoo',
      price: 50000,
      desc: 'Adds body and fullness to fine, limp hair without weighing it down.',
      image: '/Images/shampo flavor 3.jpg',
    },
    {
      id: 7,
      name: 'Deep Repair Conditioner',
      category: 'conditioner',
      price: 60000,
      desc: 'Intensive conditioning treatment that repairs split ends and restores moisture balance.',
      image: '/Images/hair butter.jpg',
    },
    {
      id: 8,
      name: 'Color Protect Conditioner',
      category: 'conditioner',
      price: 65000,
      desc: 'Specially formulated to protect color-treated hair and extend vibrancy between salon visits.',
      image: '/Images/hair butter 2.jpg',
    },
    {
      id: 9,
      name: 'Hydrating Glow Cream',
      category: 'face-cream',
      price: 75000,
      desc: 'Lightweight, non-greasy moisturizer that hydrates and gives your skin a natural, healthy glow.',
      image: '/Images/coconut butter.jpg',
    },
    {
      id: 10,
      name: 'Night Repair Cream',
      category: 'face-cream',
      price: 100000,
      desc: 'Rich night cream that works while you sleep to repair and rejuvenate tired skin.',
      image: '/Images/hair treatment.jpg',
    },
    {
      id: 11,
      name: 'Vitamin C Brightening Cream',
      category: 'face-cream',
      price: 90000,
      desc: 'Packed with Vitamin C to brighten skin tone, reduce dark spots, and boost radiance.',
      image: '/Images/hair spray.jpg',
    },
    {
      id: 12,
      name: 'Shea Butter Lip Balm',
      category: 'lip-care',
      price: 30000,
      desc: 'Ultra-moisturizing lip balm with shea butter and vitamin E for soft, supple lips.',
      image: '/Images/hair butter.jpg',
    },
    {
      id: 13,
      name: 'Tinted Lip Care',
      category: 'lip-care',
      price: 35000,
      desc: 'A hint of color combined with deep hydration for beautiful, healthy-looking lips.',
      image: '/Images/hair treatment.jpg',
    },
    {
      id: 14,
      name: 'Exfoliating Lip Scrub',
      category: 'lip-care',
      price: 35000,
      desc: 'Gentle sugar scrub that removes dry skin and leaves lips smooth and kissable.',
      image: '/Images/hair butter 2.jpg',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const ugxFormatter = new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formatPrice = (price) => {
    if (typeof price === 'number' && Number.isFinite(price)) {
      return ugxFormatter.format(price);
    }

    if (typeof price === 'string') {
      const cleaned = price.replace(/,/g, '').trim();
      const numeric = Number(cleaned.replace(/[^0-9.]/g, ''));

      if (Number.isFinite(numeric) && cleaned.length > 0) {
        return ugxFormatter.format(numeric);
      }
    }

    return 'UGX -';
  };

  const parsePriceToNumber = (price) => {
    if (typeof price === 'number' && Number.isFinite(price)) {
      return price;
    }

    if (typeof price === 'string') {
      const numeric = Number(price.replace(/,/g, '').replace(/[^0-9.]/g, ''));
      return Number.isFinite(numeric) ? numeric : 0;
    }

    return 0;
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: parsePriceToNumber(product.price),
    });
  };

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
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <p className="product-price">{formatPrice(product.price)}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/cart" className="products-floating-cart" aria-label={`Open cart with ${cartCount} items`}>
        <span>Cart</span>
        <strong>{cartCount}</strong>
      </Link>
    </div>
  );
}

export default Products;
