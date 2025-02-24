import React, { useState } from 'react';
import { Calendar, Mail, MapPin, Phone, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pastEvents = [
    {
      image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200",
      title: "Golf Classic 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1623000850264-b2dc0d01af42?auto=format&fit=crop&q=80&w=1200",
      title: "Community Golf Day"
    },
    {
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1200",
      title: "Youth Golf Program"
    },
    {
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1200",
      title: "Charity Tournament"
    },
    {
      image: "https://images.unsplash.com/photo-1600152014904-e17d0fb5c3d5?auto=format&fit=crop&q=80&w=1200",
      title: "Summer Golf Camp"
    },
    {
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=1200",
      title: "Community Gathering"
    }
  ];

  const team = [
    {
      name: "Erickson Figueras",
      role: "President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Leading our organization's mission with passion and dedication."
    },
    {
      name: "Humberto Cuebas",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Bringing our community together through memorable events."
    },
    {
      name: "Humberto Javier Cuebas",
      role: "Consultant",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      bio: "Building strong connections within our local community."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-gray-100 text-gray-800 fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0">
              <img src="/logo.png" alt="Amigos de la Placita" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="hover:text-green-600 font-medium">About</a>
              <a href="#events" className="hover:text-green-600 font-medium">Events</a>
              <a href="#team" className="hover:text-green-600 font-medium">Team</a>
              <a 
                href="#contact" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center space-x-4">
              <a 
                href="#contact" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Us
              </a>
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
                  href="#home" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#events" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </a>
                <a 
                  href="#team" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
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
                Making a Difference Through Golf
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Join us in our mission to create positive change in Puerto Rico through charitable golf events and community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#events" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
                >
                  Our Events
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center font-medium"
                >
                  Get Involved
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

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1623000850264-b2dc0d01af42?auto=format&fit=crop&q=80&w=2000"
                alt="Golf Tournament"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Amigos de la Placita</h2>
              <p className="text-gray-600 leading-relaxed">
                Since 2015, Amigos de la Placita has been at the forefront of combining golf with charitable giving in Puerto Rico. As a nonprofit organization, we've dedicated ourselves to raising funds through premier golf tournaments and events.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our partnerships with organizations like Make A Wish Puerto Rico and 10-8 InService have allowed us to make a significant impact in our community. Through the generosity of our participants and sponsors, we've been able to support these vital organizations in their missions to help those in need.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">$500K+</div>
                  <div className="text-gray-600">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold tracking-tight">Annual Golf Classic 2024</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Join us for our signature event of the year! The Annual Golf Classic brings together golf enthusiasts 
                  and community supporters for a day of friendly competition and charitable giving.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Date:</strong> June 15, 2024
                  </div>
                  <div>
                    <strong>Time:</strong> 8:00 AM - 5:00 PM
                  </div>
                  <div>
                    <strong>Location:</strong> Royal Golf Club
                  </div>
                  <div>
                    <strong>Entry Fee:</strong> $200 per player
                  </div>
                </div>
                <a 
                  href="https://golfclassic2024.amigosdelaplacita.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors mt-4"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Past Events</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden relative group cursor-pointer"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Our Team</h2>
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
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Contact Us</h2>
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
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button 
                  className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Amigos de la Placita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;