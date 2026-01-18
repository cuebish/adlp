import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';
import { config, getS3Url } from '../config';

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
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {currentLang === 'en' ? 'Player Registration' : 'Registro de Jugador'}
              </h1>
              <p className="text-gray-600 text-lg">
                {currentLang === 'en'
                  ? 'Register to participate in our upcoming golf tournament'
                  : 'Regístrese para participar en nuestro próximo torneo de golf'}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-cream-300/50 p-6 md:p-8">
              <div id="form2" className="min-h-[400px] md:min-h-[600px]"></div>
            </div>
          </div>
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

export default PlayerRegistration;
