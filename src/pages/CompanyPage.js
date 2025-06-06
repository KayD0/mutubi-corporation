import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/CompanyPage.css';

const CompanyPage = () => {
  return (
    <Layout>
      <div className="company-page">
        <div className="container">
          <h1 className="page-title">会社情報</h1>
          
          <section className="company-overview">
            <h2 className="section-title">会社概要</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社むつび</td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>2023年4月</td>
                </tr>
                <tr>
                  <th>代表取締役</th>
                  <td>山田 太郎</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>1,000万円</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>〒100-0001 東京都千代田区1-1-1 むつびビル5F</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    システムエンジニアリングサービス（SES）事業<br />
                    受託開発（請負）事業<br />
                    "むつび"型ハイブリッドモデル（SES＋受託の融合）
                  </td>
                </tr>
                <tr>
                  <th>従業員数</th>
                  <td>25名（2025年6月現在）</td>
                </tr>
              </tbody>
            </table>
          </section>
          
          <section className="company-map">
            <h2 className="section-title">アクセス</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <p>〒100-0001 東京都千代田区1-1-1 むつびビル5F</p>
                <p>最寄駅：東京メトロ丸ノ内線「東京駅」より徒歩5分</p>
                <p>JR「東京駅」八重洲北口より徒歩7分</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyPage;
