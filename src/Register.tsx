import React from 'react';
import { ArrowLeft, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';
import { LanguageSwitch } from './components/LanguageSwitch';

function Register() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a 
              href={`/${currentLang}`}
              className="flex items-center text-white hover:text-green-100 transition-colors"
            >
              <ArrowLeft className="mr-2" />
              {currentLang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
            </a>
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <img 
                src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo_Small.JPG" 
                alt="Amigos de la Placita" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {currentLang === 'en' ? 'Register for Placita Open 2025' : 'Registro para Placita Open 2025'}
          </h1>
          <div className="bg-white rounded-lg shadow-lg">
            <iframe 
              src="https://www.cognitoforms.com/f/fOVVQ72VBkKUi8WdktrZcg/5" 
              style={{border: 0, width: '100%'}} 
              height="1436"
              allow="payment"
            ></iframe>
            <script src="https://www.cognitoforms.com/f/iframe.js"></script>
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

export default Register;