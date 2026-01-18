import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { Navbar } from '../components/Navbar';
import { getS3Url } from '../config';

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
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-20 flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t.sponsorship.title}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {currentLang === 'en'
                ? 'Choose a sponsorship package that fits your organization and support our mission'
                : 'Elija un paquete de patrocinio que se adapte a su organización y apoye nuestra misión'}
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {sponsorshipPackages.map((pkg) => (
              <div
                key={pkg.key}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-cream-300/50 hover:shadow-md hover:border-adlp-primary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-adlp-primary to-adlp-primary-dark text-white p-8 md:p-10 md:w-1/3">
                    <h3 className="text-2xl font-bold mb-3">{t.sponsorship.packages[pkg.key as keyof typeof t.sponsorship.packages].name}</h3>
                    <div className="text-4xl font-bold">{pkg.price}</div>
                  </div>
                  <div className="p-8 md:p-10 md:w-2/3">
                    <ul className="space-y-4 mb-8">
                      {t.sponsorship.packages[pkg.key as keyof typeof t.sponsorship.packages].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-adlp-primary mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/${currentLang}/register/sponsorship`}
                      className="btn-secondary block text-center"
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

export default Sponsorship;
