import React, { useState } from 'react';

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
  containerClassName?: string;
  fallbackSrc?: string;
  hideOnError?: boolean;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  priority = false,
  aspectRatio,
  containerClassName = '',
  className = '',
  fallbackSrc,
  hideOnError = true,
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

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  // In production, if an image fails to load and has no working fallback, render nothing
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    if (hideOnError) {
      return null;
    }
  }

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
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      </picture>

      {/* Subtle warm overlay to keep botanical cafe ambiance consistent */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0D261C]/25 via-transparent to-transparent opacity-80" />
    </div>
  );
};
