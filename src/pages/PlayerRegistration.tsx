import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';
import { config } from '../config';

function PlayerRegistration() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    // Load Cognito Forms seamless script
    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.setAttribute('data-key', config.cognito.dataKey);
    script.setAttribute('data-form', config.cognito.forms.playerRegistration);
    document.getElementById('form2')?.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              {currentLang === 'en' ? 'Player Registration' : 'Registro de Jugador'}
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div id="form2" className="min-h-[400px] md:min-h-[600px]"></div>
            </div>
          </div>
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

export default PlayerRegistration;
