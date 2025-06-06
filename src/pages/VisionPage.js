import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/VisionPage.css';

const VisionPage = () => {
  return (
    <Layout>
      <div className="vision-page">
        <div className="container">
          <h1 className="page-title">企業理念</h1>
          
          <section className="vision-section">
            <h2 className="section-title">調和と信頼のある社会基盤の構築</h2>
            <div className="vision-content">
              <p>
                人とシステムが自然に調和する社会を実現する。<br />
                利用者と開発者、顧客とパートナーが信頼でむすばれる関係を築く。<br />
                "むつび"の精神で、社内外の関係性を大切にし、信頼と協働の文化を育てる。
              </p>
            </div>
          </section>
          
          <section className="vision-section">
            <h2 className="section-title">テクノロジーを通じた成長と課題解決</h2>
            <div className="vision-content">
              <p>
                テクノロジーと人の絆を深め、共に成長する仕組みを創出する。<br />
                システムと仕組みの"むつび"を通じて、業務の本質的課題を解決する。<br />
                多様な技術や情報をむつび、価値あるイノベーションを生み出す。
              </p>
            </div>
          </section>
          
          <section className="vision-section">
            <h2 className="section-title">誰もが安心して使える、やさしいITの実現</h2>
            <div className="vision-content">
              <p>
                持続可能で心地よいシステム環境を設計・提供する。<br />
                人の温かみを感じられるテクノロジーを追求する。<br />
                地域や社会とつながりながら、共生・共創を大切にする企業であり続ける。<br />
                わかりやすく、親しみやすいITサービスを提供し、誰もが活用できる社会をつくる。
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default VisionPage;
