'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'ru' | 'uz'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Translation function
  const t = (key: keyof TranslationKeys): string => {
    const translations = getTranslations(language)
    return translations[key] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Translation data
type TranslationKeys = {
  'nav.features': string
  'nav.solution': string
  'nav.pricing': string
  'nav.about': string
  'nav.login': string
  'nav.signup': string
  'hero.title': string
  'hero.description': string
  'hero.cta.primary': string
  'hero.cta.secondary': string
}

const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.solution': 'Solution',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    
    // Hero Section
    'hero.title': 'Modern staff hiring reimagined.',
    'hero.description': 'Effective companies no longer waste time on initial screening – they work with the best using ZevaHR.',
    'hero.cta.primary': 'Start Hiring',
    'hero.cta.secondary': 'Request a demo',
  },
  ru: {
    // Navigation
    'nav.features': 'Возможности',
    'nav.solution': 'Решения',
    'nav.pricing': 'Цены',
    'nav.about': 'О нас',
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',
    
    // Hero Section
    'hero.title': 'Современный подбор персонала переосмыслен.',
    'hero.description': 'Эффективные компании больше не тратят время на первичный отбор – они работают с лучшими, используя ZevaHR.',
    'hero.cta.primary': 'Начать найм',
    'hero.cta.secondary': 'Запросить демо',
  },
  uz: {
    // Navigation
    'nav.features': 'Imkoniyatlar',
    'nav.solution': 'Yechimlar',
    'nav.pricing': 'Narxlar',
    'nav.about': 'Biz haqimizda',
    'nav.login': 'Kirish',
    'nav.signup': 'Roʻyxatdan oʻtish',
    
    // Hero Section
    'hero.title': 'Zamonaviy kadrlar tanlovi qayta oʻylandi.',
    'hero.description': 'Samarali kompaniyalar endi dastlabki tanlovga vaqt sarflamaydi – ular ZevaHR yordamida eng yaxshilari bilan ishlaydi.',
    'hero.cta.primary': 'Ishga yollashni boshlash',
    'hero.cta.secondary': 'Demo soʻrash',
  },
}

const getTranslations = (language: Language): TranslationKeys => {
  return translations[language] || translations.en
} 