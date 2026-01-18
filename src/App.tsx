import React from 'react';
import { Calendar, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { useForm, ValidationError } from '@formspree/react';
import { config, getS3Url } from './config';

function App() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];
  const [state, handleSubmit] = useForm(config.formspree.contactFormId);

  const memories = [
    {
      image: getS3Url('events1.png'),
      titleEn: "Golfers gathering at Placita Open charity tournament",
      titleEs: "Golfistas reunidos en el torneo benéfico Placita Open"
    },
    {
      image: getS3Url('events2.png'),
      titleEn: "Community members enjoying golf day event",
      titleEs: "Miembros de la comunidad disfrutando del día de golf"
    },
    {
      image: getS3Url('events3.png'),
      titleEn: "Youth participants learning golf at charity program",
      titleEs: "Jóvenes participantes aprendiendo golf en programa benéfico"
    },
    {
      image: getS3Url('events4.png'),
      titleEn: "Charity tournament award ceremony celebration",
      titleEs: "Celebración de la ceremonia de premiación del torneo benéfico"
    },
    {
      image: getS3Url('events5.png'),
      titleEn: "Summer golf camp participants on the green",
      titleEs: "Participantes del campamento de golf de verano en el campo"
    },
    {
      image: getS3Url('events6.png'),
      titleEn: "Community gathering supporting charitable causes",
      titleEs: "Reunión comunitaria apoyando causas benéficas"
    }
  ];

  const team = [
    {
      name: "Erickson Figueras",
      role: "President",
      image: getS3Url('erickson1.png'),
      email: "erickson@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/erickson-figueras-8b917ab/"
    },
    {
      name: "Humberto Cuebas",
      role: "Treasurer",
      image: getS3Url('sr1.png'),
      email: "humberto@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/humberto-cuebas-18b710bb/"
    },
    {
      name: "Humberto Javier Cuebas",
      role: "Consultant",
      image: getS3Url('jr1.png'),
      email: "humberto.javier@amigosdelaplacita.org",
      linkedin: "https://www.linkedin.com/in/hjcuebas/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Header */}
        <section id="home" className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image moved above text for mobile, order changes on desktop */}
              <div className="w-full md:w-1/2 md:order-2 mt-8 md:mt-0">
                <img
                  src={getS3Url('ADLP1.png')}
                  alt={currentLang === 'en' ? 'Scenic golf course at Palmas del Mar in Puerto Rico' : 'Campo de golf escénico en Palmas del Mar, Puerto Rico'}
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
                    href={`/${currentLang}/donations`}
                    className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center font-medium text-base sm:text-lg"
                  >
                    {t.hero.cta.secondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-1 md:order-1">
                <img
                  src={getS3Url('ADLP_Logo.jpg')}
                  alt="Amigos de la Placita Logo"
                  loading="lazy"
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
                    <strong>{t.events.details.time}:</strong> {currentLang === 'en' ? 'Registration: 7:15 AM | Tee Off: 9:00 AM' : 'Registro: 7:15 AM | Inicio: 9:00 AM'}
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
                    href={`/${currentLang}/register/player`}
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

      {/* Foundations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">{t.foundations.title}</h2>
          
          {/* Make-A-Wish */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{t.foundations.makeAWish.title}</h3>
                <ul className="space-y-3">
                  {t.foundations.makeAWish.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="bg-white rounded-lg p-8 flex items-center justify-center h-[300px] md:h-[400px]">
                  <img
                    src={getS3Url('MakeAWishPR.png')}
                    alt={currentLang === 'en' ? 'Make-A-Wish Puerto Rico logo - Granting wishes to children with critical illnesses' : 'Logo de Make-A-Wish Puerto Rico - Concediendo deseos a niños con enfermedades críticas'}
                    loading="lazy"
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
                    src={getS3Url('10-8InService.png')}
                    alt={currentLang === 'en' ? '10-8 InService logo - Preventing suicide and bullying awareness' : 'Logo de 10-8 InService - Prevención del suicidio y concientización sobre el acoso'}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{t.foundations.tenEight.title}</h3>
                <ul className="space-y-3">
                  {t.foundations.tenEight.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
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
                  alt={currentLang === 'en' ? memory.titleEn : memory.titleEs}
                  loading="lazy"
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
                      alt={`${member.name}, ${member.role} ${currentLang === 'en' ? 'of Amigos de la Placita' : 'de Amigos de la Placita'}`}
                      loading="lazy"
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
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">{t.contact.title}</h2>
          <div className="max-w-2xl w-full">
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

      </main>

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