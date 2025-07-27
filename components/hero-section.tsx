'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import heroImage from '@/public/hero_img.png'
import { useLanguage } from '@/lib/language-context'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const { t } = useLanguage()

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Background decorative elements - optimized for mobile */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden contain-strict md:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                
                {/* Mobile-specific subtle background */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate block md:hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.01)_70%,transparent_100%)]" />
                </div>

                <section id="hero">
                    <div className="relative pt-16 sm:pt-20 md:pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="container mx-auto max-w-6xl px-6">
                            <div className="text-center sm:text-left sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-4 sm:mt-8 max-w-2xl mx-auto sm:mx-0 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium lg:mt-16">
                                    {t('hero.title')}
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto sm:mx-0 text-pretty text-base sm:text-lg leading-relaxed">
                                    {t('hero.description')}
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-2">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 w-full sm:w-auto">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-6 sm:px-5 text-base w-full sm:w-auto">
                                            <Link href="#">
                                                <span className="text-nowrap">{t('hero.cta.primary')}</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-6 sm:px-5 text-base w-full sm:w-auto">
                                        <Link href="#">
                                            <span className="text-nowrap">{t('hero.cta.secondary')}</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 overflow-hidden px-2 sm:px-4 md:-mr-56 md:px-2 lg:mr-0">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl border p-2 sm:p-3 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background relative hidden rounded-lg sm:rounded-xl md:rounded-2xl dark:block"
                                        src={heroImage}
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, 1200px"
                                    />
                                    <Image
                                        className="z-2 border-border/25 relative rounded-lg sm:rounded-xl md:rounded-2xl border dark:hidden"
                                        src={heroImage}
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, 1200px"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
