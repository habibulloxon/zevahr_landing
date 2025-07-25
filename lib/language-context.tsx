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
  'features.title': string
  'features.ai_interview.title': string
  'features.ai_interview.description': string
  'features.test_tasks.title': string
  'features.test_tasks.description': string
  'features.employee_rating.title': string
  'features.employee_rating.description': string
  'features.specialist_database.title': string
  'features.specialist_database.description': string
  'advantages.title': string
  'advantages.staff_50': string
  'advantages.active_hiring': string
  'advantages.no_recruiters': string
  'advantages.no_interviews': string
  'advantages.high_turnover': string
  'advantages.best_candidate': string
  'cta.title': string
  'cta.card1.title': string
  'cta.card1.description': string
  'cta.card2.title': string
  'cta.card2.description': string
  'cta.button': string
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
    
    // Features Section
    'features.title': 'One subscription - best employees!',
    'features.ai_interview.title': 'Interview without recruiter',
    'features.ai_interview.description': 'Automated video interviews conducted by smart AI assistant. Candidates respond at their convenience, while the system analyzes answers, identifies strengths and weaknesses, and creates a shortlist. You spend time only on the final decision, not on routine tasks.',
    'features.test_tasks.title': 'Test assignments',
    'features.test_tasks.description': 'Add your own tasks to immediately assess both soft and hard skills of candidates. Answers are checked by AI according to set criteria, and HR managers can additionally review results if needed. This speeds up the hiring process and makes it more objective.',
    'features.employee_rating.title': 'Overall employee assessment',
    'features.employee_rating.description': 'The platform forms a comprehensive final assessment based on video interviews, test assignments, and additional parameters. You get a single clear rating of candidates and can make decisions faster and more confidently.',
    'features.specialist_database.title': 'Specialist database',
    'features.specialist_database.description': 'Access to a database of candidates who have already passed video interviews and tests. You quickly find relevant specialists for new positions without repeated screening. Time savings and maximum flexibility when scaling your team.',
    
    // Advantages Section
    'advantages.title': 'Zeva is perfect for you if you have...',
    'advantages.staff_50': 'Staff of 50+ employees',
    'advantages.active_hiring': 'Active hiring process',
    'advantages.no_recruiters': 'No recruiters',
    'advantages.no_interviews': 'No desire to conduct interviews',
    'advantages.high_turnover': 'High turnover',
    'advantages.best_candidate': 'Goal - find the best candidate',
    
    // Call to Action Section
    'cta.title': 'Ready to transform your hiring process?',
    'cta.card1.title': 'Hiring the first person you find?',
    'cta.card1.description': 'We will help automate employee hiring by selecting the best candidates according to your criteria. Hire quickly, objectively, and only those who truly fit your company.',
    'cta.card2.title': 'Employee turns out to be irresponsible?',
    'cta.card2.description': 'We will help check not only experience, but also personal qualities before hiring: video interviews, tests and comprehensive candidate assessment will show who can be trusted. You will hire those who are truly reliable and share your team\'s values.',
    'cta.button': 'Try for Free',
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
    
    // Features Section
    'features.title': 'Одна подписка - лучшие сотрудники!',
    'features.ai_interview.title': 'Интервью без рекрутера',
    'features.ai_interview.description': 'Автоматизированные видеоинтервью, которые проводит умный AI‑ассистент. Кандидаты отвечают в удобное время, а система сама анализирует ответы, выявляет сильные и слабые стороны и формирует shortlist. Вы тратите время только на финальное решение, а не на рутину.',
    'features.test_tasks.title': 'Тестовые задания',
    'features.test_tasks.description': 'Добавьте собственные задания, чтобы сразу оценить как soft‑, так и hard‑скиллы кандидатов. Ответы проверяются ИИ по заданным критериям, а при необходимости HR‑менеджер может дополнительно пересмотреть результаты. Это ускоряет процесс найма и делает его более объективным.',
    'features.employee_rating.title': 'Общая оценка сотрудника',
    'features.employee_rating.description': 'Платформа формирует комплексную итоговую оценку на основе видеоинтервью, тестовых заданий и дополнительных параметров. Вы получаете единый понятный рейтинг кандидатов и можете принимать решения быстрее и увереннее.',
    'features.specialist_database.title': 'База специалистов',
    'features.specialist_database.description': 'Доступ к базе кандидатов, уже прошедших видеоинтервью и тесты. Вы быстро находите релевантных специалистов для новых позиций без повторного скрининга. Экономия времени и максимальная гибкость при масштабировании команды.',
    
    // Advantages Section
    'advantages.title': 'Zeva идеален для вас, если у вас…',
    'advantages.staff_50': 'Штат из 50+ сотрудников',
    'advantages.active_hiring': 'Активный процесс найма',
    'advantages.no_recruiters': 'Нет рекрутеров',
    'advantages.no_interviews': 'Отсутствует желания проводить интервью',
    'advantages.high_turnover': 'Высокая текучка',
    'advantages.best_candidate': 'Цель - найти лучшего кандидата',
    
    // Call to Action Section
    'cta.title': 'Готовы трансформировать процесс найма?',
    'cta.card1.title': 'Нанимаете первого попавшегося?',
    'cta.card1.description': 'Мы поможем автоматизировать найм сотрудников, отбирая лучших под ваши критерии. Нанимайте быстро, объективно и только тех, кто действительно подходит вашей компании.',
    'cta.card2.title': 'Сотрудник оказывается неответственным?',
    'cta.card2.description': 'Мы поможем проверить не только опыт, но и личные качества ещё до найма: видеоинтервью, тесты и комплексная оценка кандидата покажут, кому можно доверять. Вы наймёте тех, кто действительно надёжен и разделяет ценности вашей команды.',
    'cta.button': 'Попробовать Бесплатно',
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
    
    // Features Section
    'features.title': 'Bitta obuna - eng yaxshi xodimlar!',
    'features.ai_interview.title': 'Rekrutersiz suhbat',
    'features.ai_interview.description': 'Aqlli AI yordamchisi tomonidan oʻtkaziladigan avtomatlashtirilgan video suhbatlar. Nomzodlar qulay vaqtda javob berishadi, tizim esa javoblarni tahlil qiladi, kuchli va zaif tomonlarni aniqlaydi va qisqa roʻyxat shakllantirradi. Siz vaqtingizni faqat yakuniy qaror uchun sarflaysiz, oddiy ishlar uchun emas.',
    'features.test_tasks.title': 'Test topshiriqlari',
    'features.test_tasks.description': 'Nomzodlarning ham yumshoq, ham qattiq koʻnikmalarini darhol baholash uchun oʻz topshiriqlaringizni qoʻshing. Javoblar AI tomonidan belgilangan mezonlar boʻyicha tekshiriladi, zarurat boʻlganda HR menejer natijalarni qoʻshimcha koʻrib chiqishi mumkin. Bu ishga yollash jarayonini tezlashtiradi va uni obyektivroq qiladi.',
    'features.employee_rating.title': 'Xodimning umumiy bahosi',
    'features.employee_rating.description': 'Platforma video suhbat, test topshiriqlari va qoʻshimcha parametrlar asosida kompleks yakuniy baholash shakllantirradi. Siz nomzodlarning yagona tushunarli reytingini olasiz va qarorlarni tezroq va ishonchli qabul qilishingiz mumkin.',
    'features.specialist_database.title': 'Mutaxassislar bazasi',
    'features.specialist_database.description': 'Allaqachon video suhbat va testlardan oʻtgan nomzodlar bazasiga kirish. Siz yangi lavozimlar uchun tegishli mutaxassislarni takroriy skriningsiz tez topasiz. Vaqtni tejash va jamoani kengaytirishda maksimal moslashuvchanlik.',
    
    // Advantages Section
    'advantages.title': 'Zeva siz uchun ideal, agar sizda...',
    'advantages.staff_50': '50+ xodimdan iborat shtat',
    'advantages.active_hiring': 'Faol ishga yollash jarayoni',
    'advantages.no_recruiters': 'Rekruterlar yoʻq',
    'advantages.no_interviews': 'Suhbat oʻtkazish istagi yoʻq',
    'advantages.high_turnover': 'Yuqori kadr almashinuvi',
    'advantages.best_candidate': 'Maqsad - eng yaxshi nomzodni topish',
    
    // Call to Action Section
    'cta.title': 'Ishga yollash jarayonini oʻzgartirishga tayyormisiz?',
    'cta.card1.title': 'Birinchi uchraganni ishga olasizmi?',
    'cta.card1.description': 'Biz sizning mezonlaringizga mos eng yaxshi nomzodlarni tanlab, xodimlarni ishga olishni avtomatlashtirish ishiga yordam beramiz. Tez, obyektiv va faqat kompaniyangizga haqiqatan mos keladiganlarni ishga oling.',
    'cta.card2.title': 'Xodim mas\'uliyatsiz chiqadimi?',
    'cta.card2.description': 'Biz ishga olishdan oldin nafaqat tajribani, balki shaxsiy fazilatlarni ham tekshirishga yordam beramiz: video suhbat, testlar va nomzodning kompleks bahosi kimga ishonish mumkinligini ko\'rsatadi. Siz haqiqatan ishonchli va jamoangizning qadriyatlarini baham ko\'radiganlarni ishga olasiz.',
    'cta.button': 'Bepul sinab ko\'ring',
  },
}

const getTranslations = (language: Language): TranslationKeys => {
  return translations[language] || translations.en
} 