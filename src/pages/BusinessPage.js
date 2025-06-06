import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/BusinessPage.css';

const BusinessPage = () => {
  return (
    <Layout>
      <div className="business-page">
        <div className="container">
          <h1 className="page-title">事業内容</h1>
          
          <section className="business-section">
            <h2 className="section-title">1. システムエンジニアリングサービス（SES）事業</h2>
            <div className="business-content">
              <p>
                クライアント企業の開発現場に最適なIT人材を柔軟にアサインし、プロジェクト支援を行うサービスです。<br />
                即戦力となるエンジニアが参画し、要件定義・設計・開発・運用フェーズまで幅広く対応します。
              </p>
              <p>
                <strong>提供価値：</strong><br />
                - プロジェクトフェーズに応じたスキルマッチング<br />
                - フリーランス・社員を問わず多様な契約形態に対応<br />
                - 顧客との信頼関係を大切にする「共創型SES」
              </p>
            </div>
          </section>
          
          <section className="business-section">
            <h2 className="section-title">2. 受託開発（請負）事業</h2>
            <div className="business-content">
              <p>
                クライアントの課題に寄り添い、システムの企画・設計・開発・導入・保守を一貫して請け負います。<br />
                業務理解を重視し、「わかりやすく・使いやすく・続けやすい」システムを提供します。
              </p>
              <p>
                <strong>提供価値：</strong><br />
                - 小規模〜中規模の業務システムに特化<br />
                - 要件定義からリリース後の改善提案まで対応<br />
                - UX/UI設計を重視し、非IT層にもやさしい設計
              </p>
            </div>
          </section>
          
          <section className="business-section">
            <h2 className="section-title">3. "むつび"型ハイブリッドモデル（SES＋受託の融合）</h2>
            <div className="business-content">
              <p>
                案件に応じてSESと受託を柔軟に組み合わせ、最適な開発体制を構築。<br />
                「部分支援」から「全体請負」までスムーズにスケール可能です。
              </p>
              <p>
                <strong>このモデルの強み：</strong><br />
                - 初期はSES支援 → 仕様が固まり次第受託へ移行<br />
                - スモールスタートで始められる柔軟性<br />
                - 顧客との継続的関係を築きながら内製化支援も可能
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessPage;
