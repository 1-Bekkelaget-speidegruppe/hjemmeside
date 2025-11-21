interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'grey' | 'vandrer';
}

export default function Section({ children, className = '', bg = 'white' }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    grey: "bg-grey",
    vandrer: "bg-primary text-white"
  };

  return (
    <section className={`py-16 md:py-24 px-4 md:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
