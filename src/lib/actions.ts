'use server'

import prisma from '@/lib/db'

export async function createSlideshow({ name }: { name: string }) {
  try {
    const slideshow = await prisma.slideshow.create({
      data: { name }
    })
    return slideshow
  } catch (error) {
    throw new Error('Failed to create slideshow')
  }
}

export async function bulkCreateSlideshowImages(images: { slideshowId: number; imageId: number; displayOrder: number }[]) {
  try {
    await prisma.slideshowImage.createMany({
      data: images
    });
  } catch (error) {
    throw new Error('Failed to create slideshow images');
  }
}

export async function getImages() {
  try {
    const images = await prisma.image.findMany();
    return images;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}

export async function getSlideshows(id?: number) {
  try {
    if (id) {
      const slideshow = await prisma.slideshow.findUnique({
        where: { id },
        include: {
          images: {
            include: {
              image: true
            },
            orderBy: {
              displayOrder: 'asc'
            }
          }
        }
      });
      
      if (!slideshow) {
        throw new Error('Slideshow not found');
      }
      
      return slideshow;
    }
    
    // Return all slideshows if no id is provided
    return await prisma.slideshow.findMany({
      include: {
        images: {
          include: {
            image: true
          },
          orderBy: {
            displayOrder: 'asc'
          }
        }
      }
    });
  } catch (error) {
    throw new Error('Failed to fetch slideshow');
  }
}

export async function deleteSlideshow(id: number) {
  try {
    // First delete all related slideshow images
    await prisma.slideshowImage.deleteMany({
      where: { slideshowId: id }
    })
    // Then delete the slideshow
    await prisma.slideshow.delete({
      where: { id }
    })
  } catch (error) {
    throw new Error('Failed to delete slideshow')
  }
}

