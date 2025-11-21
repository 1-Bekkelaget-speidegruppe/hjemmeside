import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative bg-primary text-white min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Speidere på tur" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/90"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight uppercase drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-3xl mb-12 text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={ctaLink} variant="flokk" className="text-lg px-10 py-5 shadow-xl border-2 border-smaspeider">
              {ctaText}
            </Button>
            <Button href="/om-oss" variant="outline" className="text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary">
              Les mer om oss
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
