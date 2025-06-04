import React from 'react';
import logo from '../../assets/images/logo/mutubi.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo-container">
            <img src={logo} alt="Mutubi Corporation Logo" className="hero-logo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">テクノロジーと<br />人の調和をむすぶ</h1>
            <p className="hero-subtitle">調和と信頼のテクノロジーパートナー</p>
            <a href="/about" className="btn btn-primary hero-btn">詳しく見る</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
