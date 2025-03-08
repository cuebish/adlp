import React, { useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

const sponsorshipPackages = [
  {
    key: 'malanga',
    price: "$1,000.00"
  },
  {
    key: 'name',
    price: "$2,000.00"
  },
  {
    key: 'yuca',
    price: "$5,000.00"
  },
  {
    key: 'pana',
    price: "$8,000.00"
  },
  {
    key: 'aguacate',
    price: "$10,000.00"
  }
];

function Sponsorship() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-100 text-gray-800 fixed w-full z-10">
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

      {/* Main Content */}
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">
            {t.sponsorship.title}
          </h1>
          
          <div className="space-y-6 max-w-6xl mx-auto">
            {sponsorshipPackages.map((pkg) => (
              <div 
                key={pkg.key}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-200 hover:border-green-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-green-600 text-white p-8 md:w-1/3">
                    <h3 className="text-2xl font-bold mb-2">{t.sponsorship.packages[pkg.key].name}</h3>
                    <div className="text-4xl font-bold">{pkg.price}</div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <ul className="space-y-3 mb-6">
                      {t.sponsorship.packages[pkg.key].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://www.cognitoforms.com/AMIGOSDELAPLACITAGOLFCLASSICINC/_2025PlacitaOpenSponsorshipForm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center"
                    >
                      {t.sponsorship.register}
                    </a>
                  </div>
                </div>
              </div>
            ))}
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

export default Sponsorship;