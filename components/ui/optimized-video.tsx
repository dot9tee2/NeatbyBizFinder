'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedVideoProps {
  src: string;
  fallbackImage?: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  priority?: boolean;
  poster?: string;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: () => void;
}

export default function OptimizedVideo({
  src,
  fallbackImage,
  alt,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  priority = false,
  poster,
  onLoadStart,
  onCanPlay,
  onError
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority]);

  const handleLoadStart = () => {
    setIsLoading(true);
    onLoadStart?.();
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    onCanPlay?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // If there's an error or no video support, show fallback image
  if (hasError || (!isInView && !priority)) {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        {fallbackImage && (
          <Image
            src={fallbackImage}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && fallbackImage && (
        <Image
          src={fallbackImage}
          alt={`${alt} - Loading`}
          fill
          className="object-cover"
          priority={priority}
        />
      )}

      {/* Video element */}
      {isInView && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
          preload={priority ? 'auto' : 'metadata'}
        >
          <source src={src} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          {fallbackImage && (
            <Image
              src={fallbackImage}
              alt={alt}
              fill
              className="object-cover"
            />
          )}
        </video>
      )}

      {/* Fallback image for browsers that don't support video */}
      {!isInView && fallbackImage && (
        <Image
          src={fallbackImage}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      )}
    </div>
  );
}
