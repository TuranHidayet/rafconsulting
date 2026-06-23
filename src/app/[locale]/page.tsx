import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyRafSection from '@/components/WhyRafSection'
import PackagesSection from '@/components/PackagesSection'
import SpecialServicesSection from '@/components/SpecialServicesSection'
import FounderSection from '@/components/FounderSection'
import ContactSection from '@/components/ContactSection'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <WhyRafSection locale={locale} />
      <PackagesSection locale={locale} />
      <SpecialServicesSection locale={locale} />
      <FounderSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  )
}
