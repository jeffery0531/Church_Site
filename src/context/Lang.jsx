// src/context/Lang.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('zh'); // 初始语言：中文

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'ko' : 'zh'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 自定义 hook，方便使用
export function useLanguage() {
  return useContext(LanguageContext);
}
