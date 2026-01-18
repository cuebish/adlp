import React from 'react';
import { Calendar, Mail, MapPin, Phone, Linkedin, Check } from 'lucide-react';
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
        {/* Hero Section */}
        <section id="home" className="pt-20 md:pt-28 bg-gradient-to-b from-cream-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                {/* Image moved above text for mobile, order changes on desktop */}
                <div className="w-full md:w-1/2 md:order-2 mt-8 md:mt-0">
                  <div className="relative">
                    <img
                      src={getS3Url('ADLP1.png')}
                      alt={currentLang === 'en' ? 'Scenic golf course at Palmas del Mar in Puerto Rico' : 'Campo de golf escénico en Palmas del Mar, Puerto Rico'}
                      className="w-full h-[280px] md:h-[620px] object-cover rounded-2xl shadow-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-16 md:order-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4 md:mb-6">
                    {t.hero.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`/${currentLang}#events`}
                      className="btn-primary text-center text-base sm:text-lg"
                    >
                      {t.hero.cta.primary}
                    </a>
                    <a
                      href={`/${currentLang}/donations`}
                      className="btn-secondary text-center text-base sm:text-lg"
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
        <section id="about" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 order-1 md:order-1">
                  <div className="bg-cream-100 rounded-2xl p-8">
                    <img
                      src={getS3Url('ADLP_Logo.jpg')}
                      alt="Amigos de la Placita Logo"
                      loading="lazy"
                      className="w-full h-[280px] md:h-[460px] object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{t.about.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{t.about.description1}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{t.about.description2}</p>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="bg-cream-100 p-6 rounded-xl border border-cream-300/50">
                      <div className="text-3xl md:text-4xl font-bold text-adlp-primary mb-2">10+</div>
                      <div className="text-gray-600">{t.about.stats.years}</div>
                    </div>
                    <div className="bg-cream-100 p-6 rounded-xl border border-cream-300/50">
                      <div className="text-3xl md:text-4xl font-bold text-adlp-primary mb-2">$100K+</div>
                      <div className="text-gray-600">{t.about.stats.funds}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="section-padding bg-cream-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.events.title}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {currentLang === 'en'
                  ? 'Join us for our annual golf tournament supporting local charities'
                  : 'Únete a nuestro torneo anual de golf apoyando causas locales'}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-cream-300/50">
                <div className="flex items-center mb-6">
                  <Calendar className="text-adlp-primary mr-3 h-6 w-6" />
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{t.events.subtitle}</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">{t.events.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-cream-200">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t.events.details.date}</span>
                      <p className="text-gray-800 font-medium mt-1">{currentLang === 'en' ? 'April 4th, 2025' : '4 de Abril del 2025'}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t.events.details.time}</span>
                      <p className="text-gray-800 font-medium mt-1">{currentLang === 'en' ? 'Registration: 7:15 AM | Tee Off: 9:00 AM' : 'Registro: 7:15 AM | Inicio: 9:00 AM'}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t.events.details.location}</span>
                      <p className="text-gray-800 font-medium mt-1">Palmas del Mar - Humacao</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t.events.details.fee}</span>
                      <p className="text-gray-800 font-medium mt-1">$200 {currentLang === 'en' ? 'per player' : 'por jugador'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <a
                      href={`/${currentLang}/register/player`}
                      className="btn-primary text-center"
                    >
                      {t.events.register}
                    </a>
                    <a
                      href={`/${currentLang}/sponsorship`}
                      className="btn-secondary text-center"
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
        <section className="section-padding bg-cream-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 tracking-tight">{t.foundations.title}</h2>

            {/* Make-A-Wish */}
            <div className="max-w-6xl mx-auto mb-28">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{t.foundations.makeAWish.title}</h3>
                  <ul className="space-y-4">
                    {t.foundations.makeAWish.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-adlp-primary mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="bg-cream-50 rounded-2xl p-10 flex items-center justify-center h-[320px] md:h-[420px]">
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
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 order-1 md:order-1">
                  <div className="bg-cream-50 rounded-2xl p-10 flex items-center justify-center h-[320px] md:h-[420px]">
                    <img
                      src={getS3Url('10-8InService.png')}
                      alt={currentLang === 'en' ? '10-8 InService logo - Preventing suicide and bullying awareness' : 'Logo de 10-8 InService - Prevención del suicidio y concientización sobre el acoso'}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{t.foundations.tenEight.title}</h3>
                  <ul className="space-y-4">
                    {t.foundations.tenEight.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-adlp-primary mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.gallery.title}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {currentLang === 'en'
                  ? 'Highlights from our past events and community gatherings'
                  : 'Momentos destacados de nuestros eventos pasados y reuniones comunitarias'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden relative rounded-xl group"
                >
                  <img
                    src={memory.image}
                    alt={currentLang === 'en' ? memory.titleEn : memory.titleEs}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="section-padding bg-cream-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.team.title}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {currentLang === 'en'
                  ? 'Meet the dedicated team behind Amigos de la Placita'
                  : 'Conoce al equipo dedicado detrás de Amigos de la Placita'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mb-6 relative mx-auto">
                    <div className="w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role} ${currentLang === 'en' ? 'of Amigos de la Placita' : 'de Amigos de la Placita'}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-adlp-primary text-white px-5 py-1.5 rounded-full text-sm font-medium shadow-sm">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{member.name}</h3>
                  <div className="flex items-center justify-center space-x-3 mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-adlp-primary hover:bg-adlp-50 rounded-full p-2.5 transition-all"
                      title={member.email}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-adlp-primary hover:bg-adlp-50 rounded-full p-2.5 transition-all"
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
        <section id="contact" className="section-padding bg-white">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">{t.contact.title}</h2>
            <div className="max-w-2xl w-full">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-adlp-50 rounded-xl p-3 mr-4">
                      <MapPin className="text-adlp-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-700">San Juan, Puerto Rico</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-adlp-50 rounded-xl p-3 mr-4">
                      <Phone className="text-adlp-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-700">+1 (787) 450-9669</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-adlp-50 rounded-xl p-3 mr-4">
                      <Mail className="text-adlp-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-700">info@amigosdelaplacita.org</span>
                  </div>
                </div>
                {state.succeeded ? (
                  <div className="bg-adlp-50 p-8 rounded-2xl border border-adlp-primary/20">
                    <p className="text-adlp-primary font-medium text-center">
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
                      className="w-full px-5 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-adlp-primary/20 focus:border-adlp-primary transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder={t.contact.form.email}
                      required
                      className="w-full px-5 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-adlp-primary/20 focus:border-adlp-primary transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.form.message}
                      required
                      rows={4}
                      className="w-full px-5 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-adlp-primary/20 focus:border-adlp-primary transition-all resize-none"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
      <footer className="bg-gray-900 text-white py-16">
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
                  <li>
                    <a href={`/${currentLang}/sponsorship`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {currentLang === 'en' ? 'Sponsor' : 'Patrocinar'}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {currentLang === 'en' ? 'Contact Us' : 'Contáctenos'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-adlp-primary-light" />
                    San Juan, Puerto Rico
                  </li>
                  <li className="flex items-center text-gray-400 text-sm">
                    <Phone className="h-4 w-4 mr-3 text-adlp-primary-light" />
                    +1 (787) 450-9669
                  </li>
                  <li className="flex items-center text-gray-400 text-sm">
                    <Mail className="h-4 w-4 mr-3 text-adlp-primary-light" />
                    info@amigosdelaplacita.org
                  </li>
                </ul>
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

export default App;
