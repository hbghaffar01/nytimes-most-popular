import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = '/fallback.png',
  className = 'w-full h-full',
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      onError={handleError}
      className={className}
    />
  );
};

export default ImageWithFallback;