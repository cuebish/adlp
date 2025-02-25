import { useLocation, useNavigate } from 'react-router-dom';

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';
  
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