'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createSlideshow, getImages, bulkCreateSlideshowImages } from '@/lib/actions';
import { toast } from 'sonner';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useSlideshowStore } from '@/lib/stores/slideshowStore';

interface Image {
  id: number;
  src: string;
  category: string;
}

export default function SlideshowCreator() {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  // Replace useState with Zustand store
  const {
    name,
    selectedCategory,
    selectedImages,
    setName,
    setSelectedCategory,
    toggleImageSelection,
    reorderImages,
    resetStore
  } = useSlideshowStore();

  useEffect(() => {
    // Reset store when component unmounts
    return () => {
      resetStore();
    };
  }, [resetStore]);

  // Fetch all images
  const { data: images = [], isLoading: imagesLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: () => getImages(),
    retry: 1,
    staleTime: 30000,
  });

  // Filter images based on selected category
  const filteredImages = selectedCategory
    ? images.filter((image: Image) => image.category.toLowerCase() === selectedCategory.toLowerCase())
    : images;

  const categories = Array.from(
    new Set(images.map((image: Image) => image.category))
  ).sort();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(selectedImages);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    reorderImages(items);
  };

  // Create slideshow mutation
  const createSlideshowMutation = useMutation({
    mutationFn: async () => {
      if (!name || selectedImages.length === 0) {
        throw new Error('Please provide a name and select at least one image');
      }

      try {
        const slideshow = await createSlideshow({ name });
        
        const slideshowImages = selectedImages.map((imageId, index) => ({
          slideshowId: slideshow.id,
          imageId,
          displayOrder: index,
        }));

        await bulkCreateSlideshowImages(slideshowImages);
        return slideshow;
      } catch (error) {
        throw new Error('Failed to create slideshow');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['slideshows'] });
      toast.success('Slideshow created successfully');
      resetStore();
      router.push('/SlideshowManager');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#3d461f]">
      <div className="max-w-7xl mx-auto space-y-8">
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
            Create Slideshow
          </h1>
          <div className="w-[100px]" /> {/* Spacer for centering */}
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Slideshow name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-[#4a543f] text-slate-100 border border-[#5c664e] focus:outline-none focus:border-[#6b765c]"
            />
            
            {!imagesLoading && !error && images.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  className={`${
                    selectedCategory === null
                      ? 'bg-[#6b765c] text-slate-100'
                      : 'bg-[#4a543f] text-slate-100 hover:bg-[#5c664e]'
                  }`}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={String(category)}
                    onClick={() => setSelectedCategory(String(category))}
                    className={`${
                      selectedCategory?.toLowerCase() === String(category).toLowerCase()
                        ? 'bg-[#6b765c] text-slate-100'
                        : 'bg-[#4a543f] text-slate-100 hover:bg-[#5c664e]'
                    }`}
                  >
                    {String(category).charAt(0).toUpperCase() + String(category).slice(1)}
                  </Button>
                ))}
              </div>
            )}

            <div className="text-slate-300 text-sm">
              {selectedImages.length} {selectedImages.length === 1 ? 'image' : 'images'} selected
            </div>
          </div>

          {/* Selected Images Sequence */}
          {selectedImages.length > 0 && (
            <div className="bg-[#4a543f] p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Slideshow Sequence</h2>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="slideshow-sequence" direction="horizontal">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="flex gap-4 overflow-x-auto pb-4"
                    >
                      {selectedImages.map((imageId, index) => {
                        const image = images.find((img: { id: number }) => img.id === imageId);
                        if (!image) return null;
                        
                        return (
                          <Draggable key={image.id} draggableId={String(image.id)} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="relative flex-shrink-0"
                              >
                                <div className="relative w-40 group">
                                  <Image
                                    src={image.src}
                                    alt={image.category}
                                    width={160}
                                    height={120}
                                    className="rounded-lg object-cover h-[120px]"
                                  />
                                  <div className="absolute top-2 left-2 bg-[#3d461f]/80 rounded px-2 py-1">
                                    <span className="text-sm text-slate-100">#{index + 1}</span>
                                  </div>
                                  <button
                                    onClick={() => toggleImageSelection(image.id)}
                                    className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          )}

          {imagesLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-100 mx-auto"></div>
              <p className="mt-4 text-slate-100">Loading images...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-400">
              <p>Error loading images. Please try again.</p>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-8 text-slate-100">
              <p>No images found{selectedCategory ? ` in category: ${selectedCategory}` : ''}</p>
            </div>
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full min-h-[300px]"
            >
              <CarouselContent className="min-w-full">
                {filteredImages.map((image: { id: number; src: string; category: string }) => (
                  <CarouselItem 
                    key={image.id} 
                    className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                    style={{ minWidth: 'var(--carousel-item-size, 25%)' }}
                  >
                    <div
                      onClick={() => {
                        toggleImageSelection(image.id)
                      }}
                      className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 h-full ${
                        selectedImages.includes(image.id)
                          ? 'border-[#6b765c] bg-[#5c664e]/30 ring-2 ring-[#6b765c]'
                          : 'border-transparent hover:border-[#5c664e]'
                      }`}
                    >
                      <div className="relative h-full">
                        <Image
                          src={image.src}
                          alt={image.category}
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover"
                        />
                        {selectedImages.includes(image.id) && (
                          <div className="absolute top-2 right-2 bg-[#6b765c] rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-[#4a543f]/90">
                        <p className="text-sm text-slate-300">{image.category}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                {filteredImages.length === 0 && (
                  <div className="w-full text-center py-8 text-slate-100">
                    <p>No images found in this category</p>
                  </div>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}

          <div className="flex justify-between items-center">
            <Button
              onClick={() => resetStore()}
              variant="outline"
              className="bg-red-500/80 hover:bg-red-600/80 text-slate-100"
            >
              Reset Selections
            </Button>
            <Button
              onClick={() => createSlideshowMutation.mutate()}
              disabled={!name || selectedImages.length === 0 || createSlideshowMutation.isPending}
              className="bg-[#6b765c] hover:bg-[#7c876d] text-slate-100"
            >
              {createSlideshowMutation.isPending ? 'Creating...' : 'Create Slideshow'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
