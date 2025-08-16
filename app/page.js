"use client";

import { motion } from 'framer-motion';
import Skill from '@/components/skill';
import About from '@/components/about';
import Hero from '@/components/hero';
import Project from '@/components/project';
import Contect from '@/components/contect';
import ThemeToggle from '@/components/ThemeToggle';
import { useState, useCallback, useMemo } from 'react';

const HEADER_OFFSET = 80;
const MENU_CLOSE_DELAY = 100;

// Navigation items configuration
const NAV_ITEMS = [
  { id: 'home', label: 'หน้าแรก' },
  { id: 'about', label: 'เกี่ยวกับฉัน' },
  { id: 'skills', label: 'ทักษะ' },
  { id: 'projects', label: 'โปรเจกต์' },
  { id: 'contact', label: 'ติดต่อ' }
];

// Social media links
const SOCIAL_LINKS = [
  {
    href: "#",
    ariaLabel: "GitHub",
    viewBox: "0 0 24 24",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    viewBox: "0 0 24 24",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    href: "#",
    ariaLabel: "Twitter",
    viewBox: "0 0 24 24",
    path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.3 10.3 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.82 4.82 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
  }
];

// Menu icons
const MenuIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Navigation Link Component
const NavLink = ({ item, onClick, className = "" }) => (
  <a 
    href={`#${item.id}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(item.id);
    }}
    className={`hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-800 dark:text-gray-100 transition-colors cursor-pointer ${className}`}
  >
    {item.label}
  </a>
);

// Social Icon Component
const SocialIcon = ({ link }) => (
  <a 
    href={link.href} 
    className="text-gray-400 hover:text-white transition-colors"
    aria-label={link.ariaLabel}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox={link.viewBox}>
      <path d={link.path} />
    </svg>
  </a>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - HEADER_OFFSET;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, MENU_CLOSE_DELAY);
  }, []);

  const memoizedNavItems = useMemo(() => 
    NAV_ITEMS.map(item => (
      <NavLink 
        key={item.id} 
        item={item} 
        onClick={scrollToSection} 
      />
    )), [scrollToSection]
  );

  const memoizedMobileNavItems = useMemo(() => 
    NAV_ITEMS.map(item => (
      <NavLink 
        key={`mobile-${item.id}`} 
        item={item} 
        onClick={scrollToSection} 
        className="py-2"
      />
    )), [scrollToSection]
  );

  const memoizedSocialLinks = useMemo(() => 
    SOCIAL_LINKS.map((link, index) => (
      <SocialIcon key={index} link={link} />
    )), []
  );

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Ritthirat
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {memoizedNavItems}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu} 
              className="focus:outline-none transition-transform duration-300"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-20 md:hidden overflow-hidden"
          initial={false}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ display: mobileMenuOpen ? 'block' : 'none' }}
        >
          <div className="flex flex-col space-y-3 p-6">
            {memoizedMobileNavItems}
          </div>
        </motion.div>
      </nav>

      {/* Main Sections */}
      <main>
        <section id="home" className="min-h-[90vh] flex items-center overflow-hidden">
          <Hero />
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skill />
        </section>

        <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
          <Project />
        </section>

        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <Contect />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-indigo-400">ฤทธิรัตน์ มูลวงค์</div>
              <p className="text-gray-400 mt-2">© {currentYear} สงวนลิขสิทธิ์</p>
            </div>
            <div className="flex space-x-4">
              {memoizedSocialLinks}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}