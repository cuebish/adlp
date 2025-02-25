import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Mail, MapPin, Phone, Menu, X, Linkedin } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';
import { LanguageSwitch } from './components/LanguageSwitch';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];

  const memories = [
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events1.png",
      title: "Supporting Make-A-Wish Foundation",
      alt: "Children from Make-A-Wish Foundation enjoying a day at the golf course"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events2.png",
      title: "Community Outreach Program",
      alt: "Local community members participating in golf activities"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events3.png",
      title: "Youth Development Initiative",
      alt: "Young golfers learning the fundamentals of golf"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events4.png",
      title: "10-8 InService Fundraiser",
      alt: "Charity tournament participants supporting law enforcement families"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events5.png",
      title: "Junior Golf Academy",
      alt: "Children participating in summer golf training program"
    },
    {
      image: "https://amigosdelaplacita.s3.us-east-2.amazonaws.com/events6.png",
      title: "Community Impact Event",
      alt: "Community gathering celebrating successful fundraising efforts"
    },
    // Additional images for the gallery
    {
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
      title: "Golf Course Scenery",
      alt: "Beautiful golf course landscape at sunset"
    },
    {
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
      title: "Professional Training",
      alt: "Professional golfer teaching young students"
    },
    {
      image: "https://images.unsplash.com/photo-1535132011086-b8818f016104",
      title: "Youth Development",
      alt: "Young golfers practicing their swing"
    },
    {
      image: "https://images.unsplash.com/photo-1592919505780-303950717480",
      title: "Community Event",
      alt: "Community members gathered for a golf tournament"
    },
    {
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
      title: "Charity Tournament",
      alt: "Participants at a charity golf tournament"
    },
    {
      image: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5",
      title: "Golf Education",
      alt: "Educational session for aspiring golfers"
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

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{currentLang === 'en' ? 'Amigos de la Placita - Making a Difference Through Golf' : 'Amigos de la Placita - Haciendo la Diferencia a Través del Golf'}</title>
        <meta name="description" content={currentLang === 'en' ? 
          'Amigos de la Placita organizes charitable golf events in Puerto Rico, supporting organizations like Make-A-Wish Foundation and 10-8 InService.' : 
          'Amigos de la Placita organiza eventos benéficos de golf en Puerto Rico, apoyando organizaciones como Make-A-Wish Foundation y 10-8 InService.'} 
        />
        <meta name="keywords" content="golf charity, Puerto Rico golf, Make-A-Wish Foundation, 10-8 InService, charitable events, golf tournament" />
        <meta property="og:title" content="Amigos de la Placita" />
        <meta property="og:description" content={currentLang === 'en' ? 
          'Join us in making a difference through golf in Puerto Rico.' : 
          'Únete a nosotros para hacer la diferencia a través del golf en Puerto Rico.'} 
        />
        <meta property="og:image" content="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo_Small.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" hrefLang="en" href="https://amigosdelaplacita.org/en" />
        <link rel="alternate" hrefLang="es" href="https://amigosdelaplacita.org/es" />
      </Helmet>

      {/* Navbar */}
      <nav className="bg-gray-100 text-gray-800 fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href={`/${currentLang}`} className="flex-shrink-0">
              <img src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo_Small.JPG" alt="Amigos de la Placita" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href={`/${currentLang}#home`} className="hover:text-green-600 font-medium">{t.nav.home}</a>
              <a href={`/${currentLang}#about`} className="hover:text-green-600 font-medium">{t.nav.about}</a>
              <a href={`/${currentLang}#events`} className="hover:text-green-600 font-medium">{t.nav.events}</a>
              <a href={`/${currentLang}#team`} className="hover:text-green-600 font-medium">{t.nav.team}</a>
              <a href={`/${currentLang}#contact`} className="hover:text-green-600 font-medium">{t.nav.contact}</a>
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
                <a 
                  href={`/${currentLang}#contact`}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
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
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`/${currentLang}#events`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
                >
                  {t.hero.cta.primary}
                </a>
                <a 
                  href={`/${currentLang}#contact`}
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center font-medium"
                >
                  {t.hero.cta.secondary}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000"
                alt="Golf Course"
                className="w-full h-[300px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">{t.foundations.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {foundations.map((foundation) => (
              <a 
                key={foundation.name} 
                href={foundation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-8 transition-transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="h-32 flex items-center justify-center">
                    <img 
                      src={foundation.logo} 
                      alt={foundation.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP1.png"
                alt="Golf Tournament"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
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
                    <strong>{t.events.details.date}:</strong> April 4th, 2025
                  </div>
                  <div>
                    <strong>{t.events.details.time}:</strong> 8:00 AM - 5:00 PM
                  </div>
                  <div>
                    <strong>{t.events.details.location}:</strong> Palmas del Mar - Humacao
                  </div>
                  <div>
                    <strong>{t.events.details.fee}:</strong> $200 per player
                  </div>
                </div>
                <a 
                  href="https://www.cognitoforms.com/AMIGOSDELAPLACITAGOLFCLASSICINC/_2025PlacitaOpenInscriptionForm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors mt-4"
                >
                  {t.events.register}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (formerly Memories) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Gallery</h2>
          <div className="max-w-6xl mx-auto">
            <Slider {...sliderSettings}>
              {memories.map((memory, index) => (
                <div key={index} className="px-2">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={memory.image} 
                      alt={memory.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm text-gray-600">{memory.title}</p>
                </div>
              ))}
            </Slider>
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
                  <span>+1 (787) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-3" />
                  <span>info@amigosdelaplacita.org</span>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder={t.contact.form.message}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button 
                  className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t.contact.form.submit}
                </button>
              </form>
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