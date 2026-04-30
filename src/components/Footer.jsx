/**
 * Footerコンポーネント
 * ページ最下部に表示されるセクションです。
 * サイトのタイトル、SNSリンク、コピーライト情報を表示します。
 */
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-subtle)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
