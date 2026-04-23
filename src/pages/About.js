import React from 'react';
import './About.css';

function About() {
  const values = [
    {
      title: 'Natural Ingredients',
      desc: 'We prioritize natural, ethically sourced ingredients that are gentle on your body and the environment.',
    },
    {
      title: 'Quality First',
      desc: 'Every product undergoes rigorous testing to ensure it meets our high standards of effectiveness and safety.',
    },
    {
      title: 'Customer Care',
      desc: 'Your satisfaction is our priority. We listen, respond, and continuously improve based on your feedback.',
    },
    {
      title: 'Sustainability',
      desc: 'We are committed to eco-friendly packaging and sustainable practices that protect our planet.',
    },
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, our values, and what drives us every day.</p>
      </div>

      <div className="section-container">
        {/* Story Section */}
        <section className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Fix Me Beauty was born from a simple belief: that everyone deserves to feel beautiful and confident
              in their own skin. What started as a small passion project has grown into a trusted brand serving
              customers who value quality, authenticity, and self-care.
            </p>
            <p>
              Our founder, inspired by the transformative power of natural beauty rituals, set out to create a
              line of products that combine time-tested ingredients with modern science. Today, Fix Me Beauty
              stands as a testament to that vision — offering hair oils, shampoos, conditioners, face creams,
              and lip care products that deliver real results.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="about-commitment">
          <div className="commitment-content">
            <h2>Our Commitment to You</h2>
            <p>
              We are committed to providing products that not only enhance your beauty but also nurture your
              well-being. Every item in our collection is crafted with care, transparency, and a deep respect
              for our customers. We believe in building lasting relationships based on trust, quality, and
              outstanding service.
            </p>
            <p>
              When you choose Fix Me Beauty, you are choosing a brand that genuinely cares about your journey
              to looking and feeling your best. Thank you for letting us be a part of your self-care routine.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
