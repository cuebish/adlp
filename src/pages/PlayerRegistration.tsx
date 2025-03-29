import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

function PlayerRegistration() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    // Load Cognito Forms seamless script
    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.setAttribute('data-key', 'fOVVQ72VBkKUi8WdktrZcg');
    script.setAttribute('data-form', '5');
    document.getElementById('form2')?.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="fixed w-full z-10">
        <nav className="bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href={`/${currentLang}`} className="flex-shrink-0">
                <img src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo.jpg" alt="Amigos de la Placita" className="h-12 w-auto" />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href={`/${currentLang}#home`} className="hover:text-green-600 font-medium">{t.nav.home}</a>
                <a href={`/${currentLang}#about`} className="hover:text-green-600 font-medium">{t.nav.about}</a>
                <a href={`/${currentLang}#events`} className="hover:text-green-600 font-medium">{t.nav.events}</a>
                <a href={`/${currentLang}#team`} className="hover:text-green-600 font-medium">{t.nav.team}</a>
                <LanguageSwitch />
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center space-x-4">
                <LanguageSwitch />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                  <a 
                    href={`/${currentLang}#home`}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.home}
                  </a>
                  <a 
                    href={`/${currentLang}#about`}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.about}
                  </a>
                  <a 
                    href={`/${currentLang}#events`}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.events}
                  </a>
                  <a 
                    href={`/${currentLang}#team`}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.team}
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="h-[5px] bg-green-600"></div>
      </div>

      {/* Main Content */}
      <div className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              {currentLang === 'en' ? 'Player Registration' : 'Registro de Jugador'}
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div id="form2" className="min-h-[600px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default PlayerRegistration;