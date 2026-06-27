export default function AnimatedBackground({ variant = 'default' }: { variant?: 'contact' | 'insights' | 'services' | 'about' | 'default' }) {
  const img = images[variant] || images.default
  const animClass = anims[variant] || 'animate-hero-pan'
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-[-5%] bg-cover bg-center ${animClass}`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,162,39,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,162,39,0.04),transparent_50%)]" />
    </div>
  )
}

const images: Record<string, string> = {
  contact: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  insights: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
  services: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
  default: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
}

const anims: Record<string, string> = {
  contact: 'animate-pan-right',
  insights: 'animate-pan-left',
  services: 'animate-hero-pan',
  about: 'animate-pan-up',
  default: 'animate-hero-pan',
}
