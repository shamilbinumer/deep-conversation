"use client";
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav 
      className={`w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      style={{ position: 'fixed', top: 0, zIndex: 99999999999 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <img 
              src="/Images/Logo.jpg" 
              alt="" 
              className={`transition-all duration-300 ${
                isScrolled ? 'w-[45px]' : 'w-[60px]'
              }`} 
            />
          </div>
         
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#80A9A9' }}
            >
              HOME
            </a>
            <a
              href="#about"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#A0728D' }}
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#A0728D' }}
            >
              SERVICES
            </a>
            <a
              href="#blog"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#A0728D' }}
            >
              BLOG
            </a>
            <a
              href="#contact"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#A0728D' }}
            >
              CONTACT
            </a>
           
            {/* Book Now Button */}
            <button
              className="text-white font-medium px-6 py-2 rounded-md transition-all duration-200 hover:opacity-90 shadow-sm"
              style={{ backgroundColor: '#A0728D' }}
            >
              BOOK NOW
            </button>
          </div>
         
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="transition-all duration-300 focus:outline-none hover:opacity-80 relative z-50" 
              style={{ color: '#A0728D' }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
       
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-1">
            <a 
              href="#home" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: '#80A9A9',
                backgroundColor: 'rgba(128, 169, 169, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: '#A0728D',
                backgroundColor: 'rgba(160, 114, 141, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: '#A0728D',
                backgroundColor: 'rgba(160, 114, 141, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#blog" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: '#A0728D',
                backgroundColor: 'rgba(160, 114, 141, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </a>
            <a 
              href="#contact" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: '#A0728D',
                backgroundColor: 'rgba(160, 114, 141, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            <button
              className="w-full text-left text-white font-medium px-4 py-3 rounded-lg mt-4 shadow-sm hover:opacity-90 transform transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A0728D' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar