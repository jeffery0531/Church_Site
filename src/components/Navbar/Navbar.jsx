// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { useLanguage } from '../../context/Lang.jsx'; // 路径建议 ../context/Lang.jsx

function Navbar() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <header className="navbar">
        
    <div className="navbar-left flex items-center">
      <img
  src="/images/Logo.png"
  alt="教会Logo"
  style={{ height: '32px', width: '32px', marginRight: '4px', marginLeft: '4px' }}
/>
      <h1 className="site-title text-xl font-bold">
        {language === 'zh' ? '主望教会' : '갓즈드림교회'}
      </h1>

    </div>

        <nav className="navbar-right">
          <ul className="nav-menu">
            <li className="nav-item">
              {language === 'zh' ? '关于我们' : '우리에 대해'}
              <ul className="dropdown">
                <li><a href="#about">{language === 'zh' ? '我们的异象' : '우리의 비전'}</a></li>
                <li><a href="#team">{language === 'zh' ? '牧者介绍' : '목회팀'}</a></li>
              </ul>
            </li>
            <li className="nav-item">
              {language === 'zh' ? '聚会时间' : '예배 시간'}
              <ul className="dropdown">
                <li><a href="#worship">{language === 'zh' ? '主日崇拜' : '주일예배'}</a></li>
              </ul>
            </li>

             <li className="nav-item">
              <a
                href="https://www.youtube.com/@God_dream_church" // 替换为你的真实频道链接
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === 'zh' ? 'GDC TV' : 'GDC TV'}
              </a>
            </li>

            <li className="nav-item">
              {language === 'zh' ? '联系我们' : '문의하기'}
              <ul className="dropdown">
                <li><a href="#email">Email</a></li>
                <li><a href="#address">{language === 'zh' ? '地址' : '주소'}</a></li>
              </ul>
            </li>
          </ul>

          {/* 语言切换按钮 */}
          <div className="lang-buttons">
          <button
            className="lang-toggle-btn"
            onClick={() => setLanguage('zh')}
            style={{ textDecoration: language === 'zh' ? 'underline' : 'none' }}
          >
            CN
          </button>
          <button
            className="lang-toggle-btn"
            onClick={() => setLanguage('ko')}
            style={{ textDecoration: language === 'ko' ? 'underline' : 'none' }}
          >
            KR
          </button>
        </div>


        </nav>
      </header>
    </div>
  );
}

export default Navbar;
