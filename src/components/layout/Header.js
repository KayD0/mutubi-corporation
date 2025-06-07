import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/mutubi.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Mutubi Corporation" className="logo" />
            <span className="company-name">株式会社むつび</span>
          </Link>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/company" className="nav-link">会社情報</Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">事業内容</Link>
            </li>
            <li className="nav-item">
              <Link to="/vision" className="nav-link">ビジョン</Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">採用情報</Link>
            </li>
            <li className="nav-item contact-item">
              <Link to="/contact" className="nav-link contact-link">お問合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
