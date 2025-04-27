'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, X, Play, Pause, Maximize, Minimize } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getSlideshows } from '@/lib/actions';

export default function SlideshowPlayer({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  const { data: slideshow, isLoading, error } = useQuery({
    queryKey: ['slideshow', params.id],
    queryFn: () => getSlideshows(parseInt(params.id)),
    retry: 1,
  });

  useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const startSlideshow = () => {
    setIsPlaying(true);
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === (Array.isArray(slideshow) ? 0 : slideshow?.images?.length || 0) - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds
    setIntervalId(id);
  };

  const pauseSlideshow = () => {
    setIsPlaying(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (Array.isArray(slideshow) ? 0 : slideshow?.images?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (Array.isArray(slideshow) ? 0 : slideshow?.images?.length || 0) - 1 : prev - 1
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !slideshow) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <p className="mb-4">Error loading slideshow</p>
          <Button
            onClick={() => router.push('/SlideshowManager')}
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Back to Manager
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 bg-[#3d461f] relative ${
      isFullscreen ? 'bg-black p-0' : ''
    }`}>
      {/* Top buttons - now with conditional styling */}
      <div className={`${
        isFullscreen 
          ? 'absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent z-20'
          : 'absolute top-6 w-full px-8'
      } flex justify-between z-10`}>
        <Button
          variant="ghost"
          size="lg"
          className="text-slate-100 hover:bg-black/30"
          onClick={() => router.push('/SlideshowManager')}
        >
          <X className="h-8 w-8" />
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          className="text-slate-100 hover:bg-black/30"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? (
            <Minimize className="h-8 w-8" />
          ) : (
            <Maximize className="h-8 w-8" />
          )}
        </Button>
      </div>

      {/* Image container - now fullscreen when in fullscreen mode */}
      <div className={`relative ${
        isFullscreen 
          ? 'w-screen h-screen' 
          : 'w-[1024px] h-[768px] mb-12'
      } bg-black overflow-hidden`}>
        {!Array.isArray(slideshow) && slideshow.images.length > 0 && (
          <Image
            src={slideshow.images[currentImageIndex].image.src}
            alt={`Slide ${currentImageIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* Controls - now with conditional positioning and styling */}
      <div className={`flex items-center justify-center gap-8 ${
        isFullscreen 
          ? 'absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent z-20'
          : ''
      }`}>
        <Button
          variant="ghost"
          size="lg"
          className={`text-slate-100 ${
            isFullscreen 
              ? 'hover:bg-black/30' 
              : 'hover:bg-[#4a543f]'
          } p-6`}
          onClick={previousImage}
        >
          <ArrowLeft className="h-10 w-10" />
        </Button>

        <Button
          size="lg"
          onClick={isPlaying ? pauseSlideshow : startSlideshow}
          className={`${
            isFullscreen 
              ? 'bg-black/30 hover:bg-black/50' 
              : 'bg-[#6b765c] hover:bg-[#7c876d]'
          } text-slate-100 text-xl px-8 py-6`}
        >
          {isPlaying ? (
            <>
              <Pause className="h-6 w-6 mr-3" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-6 w-6 mr-3" />
              Play
            </>
          )}
        </Button>

        <div className={`${
          isFullscreen 
            ? 'bg-black/30' 
            : 'bg-[#4a543f]'
        } px-8 py-4 rounded-md text-slate-100 text-xl`}
        >
          {currentImageIndex + 1} / {!Array.isArray(slideshow) ? slideshow.images.length : 0}
        </div>

        <Button
          variant="ghost"
          size="lg"
          className={`text-slate-100 ${
            isFullscreen 
              ? 'hover:bg-black/30' 
              : 'hover:bg-[#4a543f]'
          } p-6`}
          onClick={nextImage}
        >
          <ArrowRight className="h-10 w-10" />
        </Button>
      </div>
    </div>
  );
}
