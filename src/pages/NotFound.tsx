import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';

function NotFound() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {currentLang === 'en' ? 'Page Not Found' : 'Página No Encontrada'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {currentLang === 'en'
              ? "The page you're looking for doesn't exist or has been moved."
              : 'La página que buscas no existe o ha sido movida.'}
          </p>
          <a
            href={`/${currentLang}`}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {currentLang === 'en' ? 'Go Home' : 'Ir al Inicio'}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
