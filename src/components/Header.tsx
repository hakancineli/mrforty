'use client'

// Define constants
const SITE_NAME = 'MrForty'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, User, Globe, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')

  // Get current path to determine language
  const getCurrentPath = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname
    }
    return ''
  }

  const currentPath = getCurrentPath()
  const isLangPage = /^\/(en|tr|ar|ru)(\/.*)?$/.test(currentPath)

  // Set current language based on URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const langMatch = path.match(/^\/(en|tr|ar|ru)/)
      if (langMatch) {
        setCurrentLang(langMatch[1])
      } else {
        setCurrentLang('en')
      }
    }
  }, [])
  
  // Navigation items based on current language
  const getNavigation = () => {
    const langPrefix = isLangPage ? currentPath.split('/')[1] : ''
    
    if (currentLang === 'tr') {
      return [
        { name: 'Ana Sayfa', href: langPrefix ? `/${langPrefix}` : '/' },
        { name: 'Oteller', href: langPrefix ? `/${langPrefix}/hotels` : '/hotels' },
        { name: 'Turlar', href: langPrefix ? `/${langPrefix}/tours` : '/tours' },
        { name: 'VIP Transfers', href: langPrefix ? `/${langPrefix}/transfers` : '/transfers' },
        { name: 'Uçuşlar', href: langPrefix ? `/${langPrefix}/flights` : '/flights' },
        { name: 'Deneyimler', href: langPrefix ? `/${langPrefix}/experiences` : '/experiences' },
        { name: 'Hakkımızda', href: langPrefix ? `/${langPrefix}/about` : '/about' },
        { name: 'İletişim', href: langPrefix ? `/${langPrefix}/contact` : '/contact' },
      ]
    } else if (currentLang === 'ar') {
      return [
        { name: 'الرئيسية', href: langPrefix ? `/${langPrefix}` : '/' },
        { name: 'الفنادق', href: langPrefix ? `/${langPrefix}/hotels` : '/hotels' },
        { name: 'الجولات', href: langPrefix ? `/${langPrefix}/tours` : '/tours' },
        { name: 'النقل VIP', href: langPrefix ? `/${langPrefix}/transfers` : '/transfers' },
        { name: 'الرحلات الجوية', href: langPrefix ? `/${langPrefix}/flights` : '/flights' },
        { name: 'التجارب', href: langPrefix ? `/${langPrefix}/experiences` : '/experiences' },
        { name: 'من نحن', href: langPrefix ? `/${langPrefix}/about` : '/about' },
        { name: 'اتصل بنا', href: langPrefix ? `/${langPrefix}/contact` : '/contact' },
      ]
    } else {
      return [
        { name: 'Home', href: langPrefix ? `/${langPrefix}` : '/' },
        { name: 'Hotels', href: langPrefix ? `/${langPrefix}/hotels` : '/hotels' },
        { name: 'Tours', href: langPrefix ? `/${langPrefix}/tours` : '/tours' },
        { name: 'VIP Transfers', href: langPrefix ? `/${langPrefix}/transfers` : '/transfers' },
        { name: 'Flights', href: langPrefix ? `/${langPrefix}/flights` : '/flights' },
        { name: 'Experiences', href: langPrefix ? `/${langPrefix}/experiences` : '/experiences' },
        { name: 'About', href: langPrefix ? `/${langPrefix}/about` : '/about' },
        { name: 'Contact', href: langPrefix ? `/${langPrefix}/contact` : '/contact' },
      ]
    }
  }

  const navigation = getNavigation()

  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const currentSearch = window.location.search
      
      
      // More explicit approach
      let cleanPath = currentPath
      
      // Remove language prefix if exists
      if (cleanPath.startsWith('/en/')) {
        cleanPath = cleanPath.substring(3)
      } else if (cleanPath.startsWith('/tr/')) {
        cleanPath = cleanPath.substring(3)
      } else if (cleanPath.startsWith('/ar/')) {
        cleanPath = cleanPath.substring(3)
      } else if (cleanPath.startsWith('/ru/')) {
        cleanPath = cleanPath.substring(3)
      }
      
      // Ensure cleanPath starts with /
      if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath
      }
      
      // Build new URL
      let newUrl
      if (langCode === 'en') {
        newUrl = cleanPath
      } else {
        newUrl = `/${langCode}${cleanPath}`
      }
      
      window.location.href = newUrl + currentSearch
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ]


  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="MrForty Logo"
                  width={150}
                  height={150}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            <span className={`text-2xl font-bold font-serif ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              title="Search"
              className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button
                title="Language"
                className={`flex items-center space-x-1 p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">
                  {languages.find(lang => lang.code === currentLang)?.flag}
                </span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-gray-900">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* User Account */}
            <button
              title="User Account"
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-gray-900">+90 506 641 17 85</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-gray-900">seyfettin@mrfortytravel.com</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      currentLang === lang.code
                        ? 'bg-primary-100 text-primary-600'
                        : 'hover:bg-gray-50 text-gray-900'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}