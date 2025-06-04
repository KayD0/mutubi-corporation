import React from 'react';
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
                <li><a href="/company/about">会社概要</a></li>
                <li><a href="/company/message">代表メッセージ</a></li>
                <li><a href="/company/history">沿革</a></li>
                <li><a href="/company/access">アクセス</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">事業内容</h3>
              <ul className="footer-list">
                <li><a href="/business/solutions">ソリューション</a></li>
                <li><a href="/business/services">サービス</a></li>
                <li><a href="/business/products">製品情報</a></li>
                <li><a href="/business/case-studies">導入事例</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">採用情報</h3>
              <ul className="footer-list">
                <li><a href="/careers/message">採用メッセージ</a></li>
                <li><a href="/careers/positions">募集職種</a></li>
                <li><a href="/careers/environment">働く環境</a></li>
                <li><a href="/careers/interview">社員インタビュー</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">お問い合わせ</h3>
              <ul className="footer-list">
                <li><a href="/contact">お問い合わせフォーム</a></li>
                <li><a href="/faq">よくあるご質問</a></li>
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
