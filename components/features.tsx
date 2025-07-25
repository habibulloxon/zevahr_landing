'use client'

import { Card } from '@/components/ui/card'
import { Video, FileText, Star, Database } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import FeatureImage from '@/public/feat_img.png'

export default function FeaturesSection() {
    const { t } = useLanguage()

    return (
        <section id="features">
            <div className="py-24">
                <div className="container mx-auto w-full max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            {t('features.title')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="col-span-full overflow-hidden pl-6 pt-6">
                            <Video className="text-primary size-5" />
                            <h3 className="text-foreground mt-2 text-lg font-semibold">{t('features.ai_interview.title')}</h3>
                            <p className="text-muted-foreground mt-1 max-w-xl text-balance">{t('features.ai_interview.description')}</p>
                            <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1">
                                    <Image
                                        src={FeatureImage}
                                        alt="AI Interview feature"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left h-full object-cover"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <FileText className="text-primary size-5" />
                            <h3 className="text-foreground mt-2 text-lg font-semibold">{t('features.test_tasks.title')}</h3>
                            <p className="text-muted-foreground mt-1 text-balance">{t('features.test_tasks.description')}</p>
                        </Card>

                        <Card className="p-6">
                            <Star className="text-primary size-5" />
                            <h3 className="text-foreground mt-2 text-lg font-semibold">{t('features.employee_rating.title')}</h3>
                            <p className="text-muted-foreground mt-1 text-balance">{t('features.employee_rating.description')}</p>
                        </Card>
                        <Card className="p-6">
                            <Database className="text-primary size-5" />
                            <h3 className="text-foreground mt-2 text-lg font-semibold">{t('features.specialist_database.title')}</h3>
                            <p className="text-muted-foreground mt-1 text-balance">{t('features.specialist_database.description')}</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
