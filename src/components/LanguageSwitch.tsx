import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageSwitch() {
  const { currentLang, switchLanguage } = useLanguage();
  
  return (
    <button
      onClick={switchLanguage}
      className="flex items-center space-x-2 text-sm font-medium hover:text-green-600 transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span>{currentLang === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
}