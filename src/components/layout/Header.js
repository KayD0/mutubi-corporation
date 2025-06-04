import React, { useState } from 'react';
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
          <a href="/">
            <img src={logo} alt="Mutubi Corporation" className="logo" />
          </a>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/company" className="nav-link">会社情報</a>
            </li>
            <li className="nav-item">
              <a href="/business" className="nav-link">事業内容</a>
            </li>
            <li className="nav-item">
              <a href="/vision" className="nav-link">ビジョン</a>
            </li>
            <li className="nav-item">
              <a href="/careers" className="nav-link">採用情報</a>
            </li>
            <li className="nav-item contact-item">
              <a href="/contact" className="nav-link contact-link">お問合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
