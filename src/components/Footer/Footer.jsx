// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-title">GDC Family</h3>

        {/* 地址 Section */}
        <section id="address">
          <h4>{t.address.title}</h4>
          <p className="footer-address">{t.address.content}</p>
        </section>

        {/* 邮箱 Section */}
        <section id="email">
          <h4>{t.email.title}</h4>
          <p className="footer-contact">
            {t.email.content.includes('@') ? (
              <a href={`mailto:${t.email.content}`}>{t.email.content}</a>
            ) : (
              t.email.content
            )}
          </p>
        </section>
      </div>

    </footer>
  );
};

export default Footer;
