'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createSlideshow, getImages, bulkCreateSlideshowImages } from '@/lib/actions';
import type { Image } from '@/generated/prisma';
import { toast } from 'sonner';

export default function SlideshowCreatorClient() {
  // Define all hooks at the top level
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  
  // Query for fetching images
  const { data: images, error, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: () => getImages()
  });

  // Mutations
  const createSlideshowMutation = useMutation({
    mutationFn: createSlideshow,
    onSuccess: (data) => {
      toast.success('Slideshow created successfully!');
      router.push('/SlideshowPlayer');
    },
    onError: (error) => {
      toast.error('Failed to create slideshow');
      console.error('Error creating slideshow:', error);
    }
  });

  // Get unique categories from images
  const categories = Array.from(new Set(images?.map(img => img.category) || []));

  // Render different content based on state
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-[#3d461f] text-slate-100 p-4">
          <h1>Loading images...</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-screen bg-[#3d461f] text-slate-100 p-4">
          <h1 className="text-2xl text-red-500">Error loading images:</h1>
          <pre className="mt-4 p-4 bg-[#4a543f] rounded">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          className="mb-4 text-slate-100"
          onClick={() => router.push('/')}
        >
          <ArrowLeft className="mr-2" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold mb-6">Create Slideshow</h1>
        
        {/* Rest of your component JSX */}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#3d461f] text-slate-100 p-4">
      {renderContent()}
    </div>
  );
}
