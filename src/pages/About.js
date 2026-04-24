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

  const groupMembers = [
    {
      name: 'NAYIGA FRANCISCA',
      position: 'Team Leader',
      phone: '+256 781 175289',
    },
    {
      name: 'OYAPEL PEACE',
      position: 'Marketing Coordinator',
      phone: '+256 780 832 421',
    },
    {
      name: 'MATSIKO LUCKY',
      position: 'Product Specialist',
      phone: '+256 750 937 097',
    },
    {
      name: 'NTAMBIYE SHERINA',
      position: 'Customer Support Lead',
      phone: '+256 709 861 550',
    },
    {
      name: 'MUKISA VICTOR ESTHER',
      position: 'Sales Representative',
      phone: '+256 772 418 330',
    },
    {
      name: 'KAVUMA DERAH DESTINY',
      position: 'Content Creator',
      phone: '+256 702 186 354',
    },
    {
      name: 'NABISASO TRACY ESTHER',
      position: 'Social Media Manager',
      phone: '+256 740 868 297',
    },
    {
      name: 'OKELLO RAYMOND HOSEA',
      position: 'Operations Assistant',
      phone: '+256 780 492 327',
    },
    {
      name: 'NHIAL DANIEL MAKOL',
      position: 'Finance Officer',
      phone: '+256 773 211 593',
    },
    {
      name: 'ABAHO JAMES',
      position: 'Support Officer',
      phone: '+256 780 485 954',
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

        {/* Group Members Section */}
        <section className="about-members">
          <h2>Group Members</h2>
          <div className="members-grid">
            {groupMembers.map((member) => (
              <div key={member.phone} className="member-card">
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-phone">{member.phone}</p>
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
