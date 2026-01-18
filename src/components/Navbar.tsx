import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { LanguageSwitch } from './LanguageSwitch';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const t = translations[currentLang as keyof typeof translations];
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  // Trap focus within menu when open
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full z-10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-adlp-primary focus:text-white focus:rounded-xl"
      >
        {currentLang === 'en' ? 'Skip to main content' : 'Saltar al contenido principal'}
      </a>
      <nav
        className="bg-white/95 backdrop-blur-sm text-gray-800 border-b border-cream-200"
        aria-label={currentLang === 'en' ? 'Main navigation' : 'Navegación principal'}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <a href={`/${currentLang}`} className="flex-shrink-0">
              <img
                src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo.jpg"
                alt="Amigos de la Placita"
                className="h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href={`/${currentLang}#home`} className="hover:text-adlp-primary font-medium transition-colors">{t.nav.home}</a>
              <a href={`/${currentLang}#about`} className="hover:text-adlp-primary font-medium transition-colors">{t.nav.about}</a>
              <a href={`/${currentLang}#events`} className="hover:text-adlp-primary font-medium transition-colors">{t.nav.events}</a>
              <a href={`/${currentLang}#team`} className="hover:text-adlp-primary font-medium transition-colors">{t.nav.team}</a>
              <LanguageSwitch />
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center space-x-4">
              <LanguageSwitch />
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-adlp-primary focus:ring-offset-2 rounded-xl p-1"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen
                  ? (currentLang === 'en' ? 'Close menu' : 'Cerrar menú')
                  : (currentLang === 'en' ? 'Open menu' : 'Abrir menú')
                }
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              ref={menuRef}
              className="md:hidden"
              role="navigation"
              aria-label={currentLang === 'en' ? 'Mobile navigation' : 'Navegación móvil'}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-xl shadow-md border border-cream-200 mt-2">
                <a
                  href={`/${currentLang}#home`}
                  className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-cream-100 hover:text-adlp-primary focus:bg-cream-100 focus:text-adlp-primary focus:outline-none transition-colors"
                  onClick={handleLinkClick}
                >
                  {t.nav.home}
                </a>
                <a
                  href={`/${currentLang}#about`}
                  className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-cream-100 hover:text-adlp-primary focus:bg-cream-100 focus:text-adlp-primary focus:outline-none transition-colors"
                  onClick={handleLinkClick}
                >
                  {t.nav.about}
                </a>
                <a
                  href={`/${currentLang}#events`}
                  className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-cream-100 hover:text-adlp-primary focus:bg-cream-100 focus:text-adlp-primary focus:outline-none transition-colors"
                  onClick={handleLinkClick}
                >
                  {t.nav.events}
                </a>
                <a
                  href={`/${currentLang}#team`}
                  className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-cream-100 hover:text-adlp-primary focus:bg-cream-100 focus:text-adlp-primary focus:outline-none transition-colors"
                  onClick={handleLinkClick}
                >
                  {t.nav.team}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-1.5 bg-gradient-to-r from-adlp-primary to-adlp-primary-light"></div>
    </div>
  );
}
