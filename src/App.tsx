import React, { useState } from 'react';
import { Calendar, Mail, MapPin, Phone, Menu, X, Linkedin } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';
import { LanguageSwitch } from './components/LanguageSwitch';
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];
  const [state, handleSubmit] = useForm("xdkenoek");

  const memories = [
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events1.png",
      title: "Golf Classic 2023"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events2.png",
      title: "Community Golf Day"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events3.png",
      title: "Youth Golf Program"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events4.png",
      title: "Charity Tournament"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events5.png",
      title: "Summer Golf Camp"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events6.png",
      title: "Community Gathering"
    }
  ];

  const team = [
    {
      name: "Erickson Figueras",
      role: "President",
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/erickson1.png?auto=format&fit=crop&q=80&w=400",
      email: "erickson@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/erickson-figueras-8b917ab/"
    },
    {
      name: "Humberto Cuebas",
      role: "Treasurer",
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/sr1.png?auto=format&fit=crop&q=80&w=400",
      email: "humberto@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/humberto-cuebas-18b710bb/"
    },
    {
      name: "Humberto Javier Cuebas",
      role: "Consultant",
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/jr1.png?auto=format&fit=crop&q=80&w=400",
      email: "humberto.javier@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/hjcuebas/"
    }
  ];

  const foundations = [
    {
      name: "Make A Wish PR",
      logo: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/MakeAWishPR.png",
      url: "https://wish.org/puertorico"
    },
    {
      name: "10-8 In Service",
      logo: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/10-8InService.png",
      url: "https://10-8inservice.org/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Header */}
      <section id="home" className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image moved above text for mobile, order changes on desktop */}
            <div className="w-full md:w-1/2 md:order-2">
              <img 
                src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP1.png"
                alt="Golf Course"
                className="w-full h-[250px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-12 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-3 md:mb-4">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href={`/${currentLang}#events`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium text-base sm:text-lg"
                >
                  {t.hero.cta.primary}
                </a>
                <a 
                  href={`/${currentLang}#contact`}
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center font-medium text-base sm:text-lg"
                >
                  {t.hero.cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-1 md:order-1">
              <img 
                src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo.jpg"
                alt="Amigos de la Placita Logo"
                className="w-full h-[300px] md:h-[500px] object-contain rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t.about.title}</h2>
              <p className="text-gray-600 leading-relaxed">{t.about.description1}</p>
              <p className="text-gray-600 leading-relaxed">{t.about.description2}</p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-600">{t.about.stats.years}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">$100K+</div>
                  <div className="text-gray-600">{t.about.stats.funds}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">{t.foundations.title}</h2>
          
          {/* Make-A-Wish */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Make-A-Wish Puerto Rico</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">Together, we can create wishes that will change the lives of children with serious illnesses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">Make-A-Wish's mission is our common starting point and arrival point. It is what keeps us united, what we seek and, ultimately, what we do every day.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">Make-A-Wish grants the wishes of all eligible children and teens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">Since 1980, Make-A-Wish has granted more than 550,000 wishes worldwide.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">In every community across the United States, including Puerto Rico, Make-A-Wish is dedicated to providing moments of hope, joy and transformation for our precious children and teens.</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="bg-white rounded-lg p-8 flex items-center justify-center h-[300px] md:h-[400px]">
                  <img 
                    src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/MakeAWishPR.png"
                    alt="Make A Wish Puerto Rico"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 10-8 InService */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-1 md:order-1">
                <div className="bg-white rounded-lg p-8 flex items-center justify-center h-[300px] md:h-[400px]">
                  <img 
                    src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/10-8InService.png"
                    alt="10-8 InService"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">10-8 InService</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">10-8 InService It is a non-profit organization created after the loss of a teenager to suicide. During the most difficult time of her life, the surviving mother vowed to find a way to help raise awareness about this unspoken issue and prevent the loss of other young lives to suicide.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-600">10-8 InService is committed to saving lives by raising awareness and empowering people to prevent and overcome bullying, cyberbullying and suicidal thoughts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">{t.events.title}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold tracking-tight">{t.events.subtitle}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">{t.events.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>{t.events.details.date}:</strong> {currentLang === 'en' ? 'April 4th, 2025' : '4 de Abril del 2025'}
                  </div>
                  <div>
                    <strong>{t.events.details.time}:</strong> 8:00 AM - 5:00 PM
                  </div>
                  <div>
                    <strong>{t.events.details.location}:</strong> Palmas del Mar - Humacao
                  </div>
                  <div>
                    <strong>{t.events.details.fee}:</strong> $200 {currentLang === 'en' ? 'per player' : 'por jugador'}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://www.cognitoforms.com/AMIGOSDELAPLACITAGOLFCLASSICINC/_2025PlacitaOpenInscriptionForm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    {t.events.register}
                  </a>
                  <a 
                    href={`/${currentLang}/sponsorship`}
                    className="w-full bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors text-center"
                  >
                    {t.events.sponsorship}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">{t.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
            {memories.map((memory, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden relative"
              >
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">{t.team.title}</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-6 relative mx-auto">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                      {member.role}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{member.name}</h3>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    title={member.email}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">{t.contact.title}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-green-600 mr-3" />
                  <span>San Juan, Puerto Rico</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-3" />
                  <span>+1 (787) 450-9669</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-3" />
                  <span>info@amigosdelaplacita.org</span>
                </div>
              </div>
              {state.succeeded ? (
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-600 font-medium text-center">
                    {currentLang === 'en' ? 'Thank you for your message!' : '¡Gracias por tu mensaje!'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t.contact.form.name}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.form.message}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  
                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      currentLang === 'en' ? 'Sending...' : 'Enviando...'
                    ) : (
                      t.contact.form.submit
                    )}
                  </button>
                  <ValidationError errors={state.errors} />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;