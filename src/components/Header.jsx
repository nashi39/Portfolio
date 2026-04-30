/**
 * Headerコンポーネント
 * ページ上部に固定（sticky）表示されるナビゲーションバーです。
 * ロゴと各セクションへのアンカーリンクを提供します。
 */
import React from 'react';

const Header = () => {
  return (
    <header style={{
      padding: '2rem 0',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>PORTFOLIO</h1>
        <nav>
          {/* シンプルな構成のためナビゲーションは非表示、または必要に応じてGitHubリンクなどを配置 */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
