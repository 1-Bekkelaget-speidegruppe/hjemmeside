interface CleanImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function CleanImage({ src, alt = "Image", className = "" }: CleanImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-md ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
          {alt}
        </div>
      )}
    </div>
  );
}
