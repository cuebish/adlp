import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LANGUAGE_STORAGE_KEY = 'adlp-preferred-language';

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  // Store language preference when it changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
  }, [currentLang]);

  const switchLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    const newPath = location.pathname.replace(`/${currentLang}`, `/${newLang}`);
    navigate(newPath);
  };

  return {
    currentLang,
    switchLanguage
  };
}

export function getStoredLanguage(): 'en' | 'es' {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  // Try to detect from browser settings
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }

  return 'en';
}
