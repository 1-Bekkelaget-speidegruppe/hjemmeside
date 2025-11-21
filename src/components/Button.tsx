import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'flokk' | 'tropp' | 'rover';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5";
  const variants = {
    primary: "bg-primary text-white hover:bg-[#142f29]",
    secondary: "bg-white text-primary border-2 border-white hover:bg-gray-100",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    flokk: "bg-smaspeider text-black hover:bg-[#d9b706]",
    tropp: "bg-stifinner text-white hover:bg-[#3a5065]",
    rover: "bg-rover text-white hover:bg-[#5a0c3f]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={combinedClassName}>{children}</Link>;
  }

  return <button onClick={onClick} className={combinedClassName}>{children}</button>;
}
