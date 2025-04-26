import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Image {
  id: number;
  src: string;
  category: string;
}

interface SlideshowState {
  name: string;
  selectedCategory: string | null;
  selectedImages: number[];
  setName: (name: string) => void;
  setSelectedCategory: (category: string | null) => void;
  toggleImageSelection: (imageId: number) => void;
  reorderImages: (reorderedImages: number[]) => void;
  resetStore: () => void;
}

export const useSlideshowStore = create<SlideshowState>()(
  persist(
    (set) => ({
      name: '',
      selectedCategory: null,
      selectedImages: [],
      setName: (name) => set({ name }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      toggleImageSelection: (imageId) =>
        set((state) => ({
          selectedImages: state.selectedImages.includes(imageId)
            ? state.selectedImages.filter(id => id !== imageId)
            : [...state.selectedImages, imageId]
        })),
      reorderImages: (reorderedImages) => set({ selectedImages: reorderedImages }),
      resetStore: () => set({
        name: '', 
        selectedCategory: null, 
        selectedImages: [],
        setName: (name) => set({ name }),
        setSelectedCategory: (category) => set({ selectedCategory: category }),
        toggleImageSelection: (imageId) =>
          set((state) => ({
            selectedImages: state.selectedImages.includes(imageId)
              ? state.selectedImages.filter(id => id !== imageId)
              : [...state.selectedImages, imageId]
          })),
        reorderImages: (reorderedImages) => set({ selectedImages: reorderedImages }),
        resetStore: () => set((state) => ({ ...state }))
      }, true)
    }),
    {
      name: 'slideshow-storage',
      // Add this to ensure proper cleanup
      onRehydrateStorage: () => (state) => {
        // Optional: Reset store when page loads
        // state?.resetStore();
      }
    }
  )
);
