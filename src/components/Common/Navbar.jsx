"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import '../../styles/Common/common.scss'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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

  // Function to check if a nav item is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    if (path === '#services') {
      // Services is active when on home page, since it's a section there
      return pathname === '/'
    }
    return pathname === path
  }

  // Function to get nav item color
  const getNavColor = (path) => {
    return isActive(path) ? '#A0728D' : '#80A9A9'
  }

  return (
    <nav 
      className={`w-full transition-all duration-300 ease-in-out navbar ${
        isScrolled 
          ? 'bg-white shadow-md backdrop-blur-md' 
          : isMobileMenuOpen 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
      }`}
      style={{ position: 'fixed', top: 0, zIndex: 99999999999,width:"100%" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
           <Link href='/'>
            <img 
              src="/Images/Logo.jpg" 
              alt="" 
              className={`transition-all duration-300 rounded-full ${
                isScrolled ? 'w-[45px]' : 'w-[60px]'
              }`} 
            />
           </Link>
          </div>
         
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: getNavColor('/') }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: getNavColor('/about') }}
            >
              ABOUT
            </Link>
            <Link
              href="/#services"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: getNavColor('') }}
            >
              SERVICES
            </Link>
           
            <Link
              href="/contact-us"
              className="font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: getNavColor('/contact-us') }}
            >
              CONTACT
            </Link>
           
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
            <Link 
              href="/" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: getNavColor('/'),
                backgroundColor: isActive('/') ? 'rgba(160, 114, 141, 0.1)' : 'rgba(128, 169, 169, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: getNavColor('/about'),
                backgroundColor: isActive('/about') ? 'rgba(160, 114, 141, 0.1)' : 'rgba(128, 169, 169, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/#services" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: getNavColor('#services'),
                backgroundColor: isActive('#services') ? 'rgba(160, 114, 141, 0.1)' : 'rgba(128, 169, 169, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
          
            <Link 
              href="/contact-us" 
              className="block font-medium py-3 px-2 rounded-lg hover:opacity-80 transform transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
              style={{ 
                color: getNavColor('/contact-us'),
                backgroundColor: isActive('/contact-us') ? 'rgba(160, 114, 141, 0.1)' : 'rgba(128, 169, 169, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
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