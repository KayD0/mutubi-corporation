import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/CareersPage.css';

const CareersPage = () => {
  return (
    <Layout>
      <div className="careers-page">
        <div className="container">
          <h1 className="page-title">採用情報</h1>
          
          <section className="careers-section">
            <h2 className="section-title">募集職種</h2>
            <div className="careers-content">
              <div className="job-card">
                <h3 className="job-title">システムエンジニア</h3>
                <div className="job-details">
                  <p><strong>業務内容：</strong>クライアント企業の要件に基づいたシステム設計・開発・テスト・運用保守</p>
                  <p><strong>必須スキル：</strong>Java, JavaScript, SQLなどの開発経験3年以上</p>
                  <p><strong>歓迎スキル：</strong>クラウド環境（AWS, Azure）での開発経験、フレームワーク（Spring, React）の使用経験</p>
                  <p><strong>給与：</strong>経験・能力に応じて決定（年収400万円〜600万円）</p>
                  <p><strong>勤務地：</strong>東京都千代田区（リモートワーク併用可）</p>
                </div>
              </div>
              
              <div className="job-card">
                <h3 className="job-title">プロジェクトマネージャー</h3>
                <div className="job-details">
                  <p><strong>業務内容：</strong>プロジェクト全体の管理・推進、クライアントとの折衝、チームマネジメント</p>
                  <p><strong>必須スキル：</strong>IT業界でのプロジェクト管理経験5年以上</p>
                  <p><strong>歓迎スキル：</strong>PMP資格、アジャイル開発経験、マネジメント経験</p>
                  <p><strong>給与：</strong>経験・能力に応じて決定（年収600万円〜800万円）</p>
                  <p><strong>勤務地：</strong>東京都千代田区（リモートワーク併用可）</p>
                </div>
              </div>
              
              <div className="job-card">
                <h3 className="job-title">UI/UXデザイナー</h3>
                <div className="job-details">
                  <p><strong>業務内容：</strong>ユーザー体験を考慮したUI設計、プロトタイプ作成、デザインガイドライン策定</p>
                  <p><strong>必須スキル：</strong>UI/UXデザイン経験3年以上、Figmaなどのデザインツール使用経験</p>
                  <p><strong>歓迎スキル：</strong>フロントエンド開発の知識、ユーザーテスト実施経験</p>
                  <p><strong>給与：</strong>経験・能力に応じて決定（年収450万円〜650万円）</p>
                  <p><strong>勤務地：</strong>東京都千代田区（リモートワーク併用可）</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="careers-section">
            <h2 className="section-title">働く環境</h2>
            <div className="careers-content">
              <p><strong>勤務時間：</strong>フレックスタイム制（コアタイム 11:00-15:00）</p>
              <p><strong>休日休暇：</strong>完全週休2日制（土日）、祝日、年末年始、有給休暇、慶弔休暇</p>
              <p><strong>福利厚生：</strong>各種社会保険完備、交通費支給、書籍購入補助、資格取得支援、リモートワーク環境整備補助</p>
              <p><strong>研修制度：</strong>新入社員研修、技術研修、外部セミナー参加支援</p>
              <p><strong>社内制度：</strong>副業OK、社内勉強会、技術共有会</p>
            </div>
          </section>
          
          <section className="careers-section">
            <h2 className="section-title">採用フロー</h2>
            <div className="careers-content">
              <ol className="flow-list">
                <li>書類選考</li>
                <li>一次面接（オンライン）</li>
                <li>二次面接（対面またはオンライン）</li>
                <li>最終面接</li>
                <li>内定</li>
              </ol>
              <p className="note">※選考は最短2週間で完了します。</p>
            </div>
          </section>
          
          <section className="careers-section">
            <h2 className="section-title">応募方法</h2>
            <div className="careers-content">
              <p>下記の「応募する」ボタンから必要事項をご記入の上、履歴書・職務経歴書をご提出ください。</p>
              <div className="apply-button-container">
                <a href="/contact" className="apply-button">応募する</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CareersPage;
