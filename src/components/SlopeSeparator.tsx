interface SlopeSeparatorProps {
  position?: 'top' | 'bottom';
  color?: string;
  angle?: 'left' | 'right';
}

export default function SlopeSeparator({ position = 'bottom', color = 'text-white', angle = 'right' }: SlopeSeparatorProps) {
  const classes = position === 'top' 
    ? `absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${color}`
    : `absolute bottom-0 left-0 w-full overflow-hidden leading-none ${color}`;

  // Simple angled polygon
  // If angle is right: starts high left, goes low right (or vice versa depending on rotation)
  // We'll use a simple polygon points="0,100 100,0 100,100" type shape
  
  return (
    <div className={classes} style={{ zIndex: 1 }}>
      <svg 
        className="relative block w-full h-[50px] md:h-[80px]" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        {angle === 'right' ? (
          <polygon points="0,100 100,0 100,100" className="fill-current" />
        ) : (
          <polygon points="0,0 0,100 100,100" className="fill-current" />
        )}
      </svg>
    </div>
  );
}
