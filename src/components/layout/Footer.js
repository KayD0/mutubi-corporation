import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-heading">会社情報</h3>
              <ul className="footer-list">
                <li><Link to="/company">会社情報</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">事業内容</h3>
              <ul className="footer-list">
                <li><Link to="/business">事業内容</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">ビジョン</h3>
              <ul className="footer-list">
                <li><Link to="/vision">企業理念</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">採用情報</h3>
              <ul className="footer-list">
                <li><Link to="/careers">採用情報</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">お問い合わせ</h3>
              <ul className="footer-list">
                <li><Link to="/contact">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Mutubi Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
