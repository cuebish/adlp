import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';
import { getS3Url } from '../config';

function NotFound() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-adlp-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            {currentLang === 'en' ? 'Page Not Found' : 'Página No Encontrada'}
          </h2>
          <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
            {currentLang === 'en'
              ? "The page you're looking for doesn't exist or has been moved."
              : 'La página que buscas no existe o ha sido movida.'}
          </p>
          <a
            href={`/${currentLang}`}
            className="btn-primary inline-block"
          >
            {currentLang === 'en' ? 'Go Home' : 'Ir al Inicio'}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {/* Column 1: Logo + Description */}
              <div>
                <img
                  src={getS3Url('ADLP_Logo.jpg')}
                  alt="Amigos de la Placita"
                  className="h-16 w-auto mb-4 rounded-lg"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {currentLang === 'en'
                    ? 'Supporting Puerto Rican communities through golf events and charitable initiatives since 2014.'
                    : 'Apoyando a las comunidades puertorriqueñas a través de eventos de golf e iniciativas benéficas desde 2014.'}
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {currentLang === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href={`/${currentLang}#about`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t.nav.about}
                    </a>
                  </li>
                  <li>
                    <a href={`/${currentLang}#events`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t.nav.events}
                    </a>
                  </li>
                  <li>
                    <a href={`/${currentLang}/donations`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {currentLang === 'en' ? 'Donate' : 'Donar'}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {currentLang === 'en' ? 'Contact Us' : 'Contáctenos'}
                </h4>
                <p className="text-gray-400 text-sm">info@amigosdelaplacita.org</p>
                <p className="text-gray-400 text-sm mt-2">+1 (787) 450-9669</p>
              </div>
            </div>

            {/* Divider and Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <p className="text-gray-500 text-sm text-center">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
