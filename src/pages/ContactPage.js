import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '件名を入力してください';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーに同意してください';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    });
  };
  
  return (
    <Layout>
      <div className="contact-page">
        <div className="container">
          <h1 className="page-title">お問い合わせ</h1>
          
          {submitted ? (
            <div className="success-message">
              <h2>お問い合わせありがとうございます</h2>
              <p>内容を確認の上、担当者より折り返しご連絡いたします。</p>
              <button 
                className="new-inquiry-button"
                onClick={() => setSubmitted(false)}
              >
                新しいお問い合わせ
              </button>
            </div>
          ) : (
            <>
              <section className="contact-section">
                <h2 className="section-title">お問い合わせフォーム</h2>
                <p className="contact-description">
                  サービスに関するご質問、お見積もりのご依頼など、お気軽にお問い合わせください。
                  担当者より折り返しご連絡いたします。
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">お名前 <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">会社名</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">電話番号</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">件名 <span className="required">*</span></label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <div className="error-message">{errors.subject}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容 <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className={errors.privacy ? 'error' : ''}
                    />
                    <label htmlFor="privacy">
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意します <span className="required">*</span>
                    </label>
                    {errors.privacy && <div className="error-message">{errors.privacy}</div>}
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="submit-button">送信する</button>
                  </div>
                </form>
              </section>
              
              <section className="contact-section">
                <h2 className="section-title">その他のお問い合わせ方法</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <h3>電話でのお問い合わせ</h3>
                    <p>03-1234-5678</p>
                    <p>（受付時間：平日 9:00〜18:00）</p>
                  </div>
                  
                  <div className="contact-method">
                    <h3>メールでのお問い合わせ</h3>
                    <p>info@mutubi.co.jp</p>
                  </div>
                  
                  <div className="contact-method">
                    <h3>所在地</h3>
                    <p>〒100-0001</p>
                    <p>東京都千代田区1-1-1 むつびビル5F</p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
