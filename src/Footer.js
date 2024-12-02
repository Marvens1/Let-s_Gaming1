import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section principale */}
      <div className="footer-content">
        {/* Logo et description */}
        <div className="footer-logo-section">
          <h2 className="footer-logo">Let's Gaming</h2>
          <p className="footer-description">
            Explorez des jeux captivants et défiez vos amis sur notre plateforme.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/home">Accueil</a></li>
            <li><a href="/games">Jeux</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Liens sociaux */}
        <div className="footer-socials">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Inscrivez-vous à notre newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Entrez votre email"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Let's Gaming. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
