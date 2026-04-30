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
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Outfit' }}>
          Portfolio
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-muted)' }}>GitHub</a>
          <a href="#" style={{ color: 'var(--text-muted)' }}>Twitter</a>
          <a href="#" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
