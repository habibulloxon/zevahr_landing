'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'


export default function FooterSection() {
    const { t } = useLanguage()

    const links = [
        {
            title: t('nav.features'),
            href: '#features',
        },
        {
            title: t('nav.solution'),
            href: '#advantages',
        },
        {
            title: t('nav.pricing'),
            href: '#cta',
        },
        {
            title: t('nav.about'),
            href: '#about',
        },
    ]

    return (
        <footer id="about" className="border-t bg-white py-12 dark:bg-transparent">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap justify-between gap-6 items-center">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} ZevaHR, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last items-center">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
