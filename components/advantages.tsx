'use client'

import { Users, TrendingUp, UserX, MessageSquareOff, RotateCcw, Target } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import AdvantagesImage from '@/public/adv_img.png'

export default function AdvantagesSection() {
    const { t } = useLanguage()

    return (
        <section id="advantages" className="py-16 md:py-32">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">{t('advantages.title')}</h2>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Users className="size-5 text-primary" />
                                {t('advantages.staff_50')}
                            </li>
                            <li>
                                <TrendingUp className="size-5 text-primary" />
                                {t('advantages.active_hiring')}
                            </li>
                            <li>
                                <UserX className="size-5 text-primary" />
                                {t('advantages.no_recruiters')}
                            </li>
                            <li>
                                <MessageSquareOff className="size-5 text-primary" />
                                {t('advantages.no_interviews')}
                            </li>
                            <li>
                                <RotateCcw className="size-5 text-primary" />
                                {t('advantages.high_turnover')}
                            </li>
                            <li>
                                <Target className="size-5 text-primary" />
                                {t('advantages.best_candidate')}
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src={AdvantagesImage} className="rounded-[15px] object-cover" alt="ZevaHR platform illustration" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
