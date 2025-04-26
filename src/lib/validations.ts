import * as z from 'zod'

// Base schemas for create operations
export const createSlideshowSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
})

export const createImageSchema = z.object({
  src: z.string().url('Must be a valid URL'),
  category: z.string().min(1, 'Category is required').max(255, 'Category is too long'),
})

export const createSlideshowImageSchema = z.object({
  slideshowId: z.number().int().positive('Slideshow ID is required'),
  imageId: z.number().int().positive('Image ID is required'),
  displayOrder: z.number().int().min(0, 'Display order must be 0 or greater'),
})

// Base schemas for update operations
export const updateSlideshowSchema = createSlideshowSchema.partial()

export const updateImageSchema = createImageSchema.partial()

export const updateSlideshowImageSchema = createSlideshowImageSchema.partial()

// Schemas for querying
export const slideshowQuerySchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().optional(),
})

export const imageQuerySchema = z.object({
  id: z.number().int().positive().optional(),
  category: z.string().optional(),
})

export const slideshowImageQuerySchema = z.object({
  slideshowId: z.number().int().positive().optional(),
  imageId: z.number().int().positive().optional(),
  displayOrder: z.number().int().min(0).optional(),
})

// Schema for bulk operations
export const bulkCreateSlideshowImagesSchema = z.array(createSlideshowImageSchema)

// Schema for reordering slideshow images
export const reorderSlideshowImagesSchema = z.array(z.object({
  id: z.number().int().positive(),
  displayOrder: z.number().int().min(0),
}))

// Schema for filtering images by category
export const imageCategoryFilterSchema = z.object({
  category: z.string(),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(20),
})

// Types derived from schemas
export type CreateSlideshow = z.infer<typeof createSlideshowSchema>
export type CreateImage = z.infer<typeof createImageSchema>
export type CreateSlideshowImage = z.infer<typeof createSlideshowImageSchema>
export type UpdateSlideshow = z.infer<typeof updateSlideshowSchema>
export type UpdateImage = z.infer<typeof updateImageSchema>
export type UpdateSlideshowImage = z.infer<typeof updateSlideshowImageSchema>
export type SlideshowQuery = z.infer<typeof slideshowQuerySchema>
export type ImageQuery = z.infer<typeof imageQuerySchema>
export type SlideshowImageQuery = z.infer<typeof slideshowImageQuerySchema>
export type BulkCreateSlideshowImages = z.infer<typeof bulkCreateSlideshowImagesSchema>
export type ReorderSlideshowImages = z.infer<typeof reorderSlideshowImagesSchema>
export type ImageCategoryFilter = z.infer<typeof imageCategoryFilterSchema>