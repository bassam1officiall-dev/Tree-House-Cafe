import React, { useState } from 'react';

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
  containerClassName?: string;
  showDevLabel?: boolean;
  fallbackSrc?: string;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  priority = false,
  aspectRatio,
  containerClassName = '',
  className = '',
  showDevLabel = false,
  fallbackSrc = '/images/tree-house-facade.jpg',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Derive WebP source if src is a local image path ending in .jpg or .png
  const webpSrc = currentSrc.match(/\.(jpe?g|png)$/i)
    ? currentSrc.replace(/\.(jpe?g|png)$/i, '.webp')
    : undefined;

  const fileName = src.split('/').pop() || src;

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio ? aspectRatio : ''} ${containerClassName}`}
    >
      <picture>
        {webpSrc && !hasError && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      </picture>

      {/* Subtle warm overlay to keep botanical cafe ambiance consistent */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0D261C]/25 via-transparent to-transparent opacity-80" />

      {/* Dev-only slot label to guide real photo replacements */}
      {import.meta.env.DEV && showDevLabel && (
        <span className="absolute bottom-2 right-2 z-10 px-1.5 py-0.5 text-[10px] font-mono bg-[#0D261C]/85 text-[#D49B4B] rounded border border-[#1C4031] pointer-events-none tracking-tight">
          {fileName}
        </span>
      )}
    </div>
  );
};
