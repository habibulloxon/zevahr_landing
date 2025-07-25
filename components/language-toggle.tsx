'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, Language } from '@/lib/language-context'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'uz' as Language, name: 'O\'zbekcha', flag: '🇺🇿' },
]

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200',
          'hover:bg-muted/50 text-muted-foreground hover:text-foreground',
          'border border-transparent hover:border-border/50',
          isOpen && 'bg-muted/50 text-foreground border-border/50'
        )}
        aria-label="Select language"
        type="button"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLanguage.name}
        </span>
        <span className="sm:hidden text-sm">
          {currentLanguage.flag}
        </span>
        <ChevronDown 
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors',
                  'hover:bg-muted/50',
                  language === lang.code 
                    ? 'bg-muted text-foreground font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
                type="button"
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
                {language === lang.code && (
                  <span className="ml-auto text-xs text-muted-foreground">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 