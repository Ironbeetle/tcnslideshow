'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, Play, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getSlideshows, deleteSlideshow } from '@/lib/actions';
import { toast } from 'sonner';
import Image from 'next/image';

export default function SlideshowManager() {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const { data: slideshows = [], isLoading, error } = useQuery({
    queryKey: ['slideshows'],
    queryFn: () => getSlideshows(),
    retry: 1,
    staleTime: 30000,
  });

  const deleteSlideshowMutation = useMutation({
    mutationFn: deleteSlideshow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['slideshows'] });
      toast.success('Slideshow deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete slideshow');
    },
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this slideshow?')) {
      deleteSlideshowMutation.mutate(id);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#3d461f]">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-slate-100"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-center text-slate-100">
            Slideshow Manager 
          </h1>
          <div className="w-[100px]" /> {/* Spacer for centering */}
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-100 mx-auto"></div>
            <p className="mt-4 text-slate-100">Loading slideshows...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-400">
            <p>Error loading slideshows. Please try again.</p>
          </div>
        ) : Array.isArray(slideshows) && slideshows.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-100">No slideshows found</p>
            <Button
              onClick={() => router.push('/SlideshowCreator')}
              className="mt-4 bg-[#6b765c] hover:bg-[#7c876d] text-slate-100"
            >
              Create New Slideshow
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(slideshows as Array<{
              id: number;
              name: string;
              images: Array<{
                image: {
                  id: number;
                  src: string;
                  category: string;
                };
              }>;
            }>).map((slideshow) => (
              <div
                key={slideshow.id}
                className="bg-[#4a543f] rounded-lg overflow-hidden border border-[#5c664e]"
              >
                <div className="relative h-48 bg-[#3d461f]">
                  {slideshow.images[0] ? (
                    <Image
                      src={slideshow.images[0].image.src}
                      alt={slideshow.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-slate-400">No images</p>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-slate-100 mb-2">
                    {slideshow.name}
                  </h2>
                  <p className="text-slate-300 text-sm mb-4">
                    {slideshow.images.length} {slideshow.images.length === 1 ? 'image' : 'images'}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => router.push(`/SlideshowPlayer/${slideshow.id}`)}
                      className="flex-1 bg-[#6b765c] hover:bg-[#7c876d] text-slate-100"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Play
                    </Button>
                    <Button
                      onClick={() => handleDelete(slideshow.id)}
                      variant="outline"
                      className="bg-red-500/80 hover:bg-red-600/80 text-slate-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
