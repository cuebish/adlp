import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';

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
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-16 flex-grow">
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
                    <h3 className="text-2xl font-bold mb-2">{t.sponsorship.packages[pkg.key as keyof typeof t.sponsorship.packages].name}</h3>
                    <div className="text-4xl font-bold">{pkg.price}</div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <ul className="space-y-3 mb-6">
                      {t.sponsorship.packages[pkg.key as keyof typeof t.sponsorship.packages].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/${currentLang}/register/sponsorship`}
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

export default Sponsorship;
