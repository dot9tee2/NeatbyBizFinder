'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight, Camera, Award, Star } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  featured?: boolean;
}

interface NMConcreteGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  maxImages?: number;
  showRandom?: boolean;
  className?: string;
}

export default function NMConcreteGallery({
  images,
  title = "Our Work Gallery",
  subtitle = "Showcasing our past projects and beautiful results",
  maxImages,
  showRandom = false,
  className = ""
}: NMConcreteGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter and limit images based on props
  let displayImages = images;
  
  if (showRandom && maxImages) {
    // Shuffle array and take maxImages
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    displayImages = shuffled.slice(0, maxImages);
  } else if (maxImages) {
    // Take first maxImages
    displayImages = images.slice(0, maxImages);
  }

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % displayImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(displayImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? displayImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(displayImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Camera className="h-8 w-8 text-orange-500 mr-3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex items-center justify-center mt-4">
          <Badge className="bg-orange-500 text-white border-orange-400 px-4 py-2">
            <Award className="h-4 w-4 mr-2" />
            {displayImages.length} Projects Showcased
          </Badge>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayImages.map((image, index) => (
          <Card 
            key={image.id} 
            className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-sm transform hover:scale-105"
            onClick={() => openModal(image, index)}
          >
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  console.error('Gallery image failed to load:', image.src);
                }}
                onLoad={() => {
                  console.log('Gallery image loaded successfully:', image.src);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title && (
                    <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">
                      {image.title}
                    </h3>
                  )}
                  {image.description && (
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {image.description}
                    </p>
                  )}
                  {image.category && (
                    <Badge className="bg-orange-500/80 text-white border-orange-400 mt-2">
                      {image.category}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Featured Badge */}
              {image.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-white border-yellow-400">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {displayImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  console.error('Modal image failed to load:', selectedImage.src);
                }}
                onLoad={() => {
                  console.log('Modal image loaded successfully:', selectedImage.src);
                }}
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  {selectedImage.title && (
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                  )}
                  {selectedImage.description && (
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  )}
                  {selectedImage.category && (
                    <Badge className="bg-orange-500 text-white border-orange-400 mt-3">
                      {selectedImage.category}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Image Counter */}
            {displayImages.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {displayImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
