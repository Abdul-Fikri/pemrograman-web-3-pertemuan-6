'use client'; // <-- Tambahkan baris ini di paling atas file

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer style={{ 
      backgroundColor: '#0f172a', 
      color: '#94a3b8', 
      padding: '40px 20px', 
      marginTop: '60px', 
      borderTop: '1px solid #334155', 
      fontSize: '14px' 
    }}>
      <div style={{ 
        maxWidth: '960px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '16px', 
        textAlign: 'center' 
      }}>
        {/* Nama Kampus / Hak Cipta */}
        <div>
          <strong style={{ color: '#ffffff', fontSize: '16px' }}>Politeknik Takumi</strong>
          <p style={{ margin: '4px 0 0 0' }}>
            © {currentYear || '2026'} - Hak Cipta Dilindungi.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Tentang Kami</a>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Kontak</a>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privasi</a>
        </div>
      </div>
    </footer>
  );
}
