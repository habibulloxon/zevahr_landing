'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function CallToAction() {
    const { t } = useLanguage()

    return (
        <section id="cta" className="py-16 md:py-32">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {t('cta.title')}
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="p-8 flex flex-col">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                            {t('cta.card1.title')}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                            {t('cta.card1.description')}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="w-full mt-auto">
                            <Link href="/">
                                <span>{t('cta.button')}</span>
                            </Link>
                        </Button>
                    </Card>

                    <Card className="p-8 flex flex-col">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                            {t('cta.card2.title')}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                            {t('cta.card2.description')}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="w-full mt-auto">
                            <Link href="https://hr-app-dev-main-rrponh.laravel.cloud/register">
                                <span>{t('cta.button')}</span>
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}
