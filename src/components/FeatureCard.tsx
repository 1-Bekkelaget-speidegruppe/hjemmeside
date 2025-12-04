import Link from "next/link";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  index: number;
  color?: "smaspeider" | "stifinner" | "rover";
}

export default function FeatureCard({
  title,
  subtitle,
  description,
  image,
  href,
  index,
  color = "smaspeider",
}: FeatureCardProps) {
  const colorClasses = {
    smaspeider: "from-smaspeider to-smaspeider/80 text-black",
    stifinner: "from-stifinner to-stifinner/80 text-white",
    rover: "from-rover to-rover/80 text-white",
  };

  const borderColors = {
    smaspeider: "group-hover:border-smaspeider/50",
    stifinner: "group-hover:border-stifinner/50",
    rover: "group-hover:border-rover/50",
  };

  const shadowColors = {
    smaspeider: "group-hover:shadow-smaspeider/20",
    stifinner: "group-hover:shadow-stifinner/20",
    rover: "group-hover:shadow-rover/20",
  };

  return (
    <div>
      <Link href={href} className="group block">
        <div
          className={`relative bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${borderColors[color]} ${shadowColors[color]}`}
        >
          {/* Image container */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Badge */}
            <div
              className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${colorClasses[color]} text-xs font-bold uppercase tracking-wider shadow-lg`}
            >
              {subtitle}
            </div>

            {/* Title on image */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                {title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wider">
              <span>Les mer</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
