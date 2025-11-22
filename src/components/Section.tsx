import SlopeSeparator from './SlopeSeparator';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'grey' | 'vandrer';
  slopeTop?: boolean;
  slopeBottom?: boolean;
  slopeAngle?: 'left' | 'right';
}

export default function Section({ children, className = '', bg = 'white', slopeTop = false, slopeBottom = false, slopeAngle = 'right' }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    grey: "bg-grey",
    vandrer: "bg-primary text-white"
  };

  // Determine slope color based on current section background
  // This logic assumes the adjacent section is white/grey/primary. 
  // For this MVP, we'll make the slope the SAME color as the section, 
  // effectively "cutting into" the adjacent section.
  
  const slopeColor = bg === 'vandrer' ? 'text-primary' : bg === 'grey' ? 'text-grey' : 'text-white';

  return (
    <section className={`relative py-12 md:py-24 px-4 md:px-8 ${bgColors[bg]} ${className}`}>
      {slopeTop && <SlopeSeparator position="top" color={slopeColor} angle={slopeAngle} />}
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
      {slopeBottom && <SlopeSeparator position="bottom" color={slopeColor} angle={slopeAngle === 'left' ? 'right' : 'left'} />}
    </section>
  );
}
