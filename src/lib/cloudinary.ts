// lib/cloudinary.ts (example utility file)
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  id: string; // public_id
  src: string; // secure_url
  thumbnailSrc: string; // You'll construct this using transformations
  alt: string; // From context or filename
  width: number;
  height: number;
  title?: string; // From context
  description?: string; // From context
}

// Fetches images from a specific folder
export async function getImagesFromFolder(folderName: string): Promise<CloudinaryImage[]> {
  try {
    const results = await cloudinary.search
      .expression(`folder:${folderName}`)
      .sort_by('public_id', 'desc') // Or 'uploaded_at', etc.
      .max_results(50) // Adjust as needed, consider pagination for very large galleries
      .with_field('context') // To get custom metadata like title, description, alt
      .with_field('tags')
      .execute();

    return results.resources.map((resource: any) => {
      // Construct alt text, title, description from context or filename
      const altText = resource.context?.alt || resource.filename || 'Gallery image';
      const title = resource.context?.caption || resource.context?.title || '';
      const description = resource.context?.description || '';

      // Create a thumbnail URL using Cloudinary transformations
      const thumbnailUrl = cloudinary.url(resource.public_id, {
        width: 400,
        height: 300, // Adjust based on desired thumbnail aspect ratio
        crop: 'fill', // Or 'fit', 'limit', 'pad', etc.
        gravity: 'auto',
        quality: 'auto:good',
        format: 'webp', // Or 'avif', 'jpg'
      });
      
      // You might want a slightly larger version for the main lightbox display,
      // or use the original `secure_url` and let the lightbox handle resizing.
      // For the lightbox `src`, you might want to limit dimensions for performance
      // or use `resource.secure_url` if originals are already reasonably sized.
      const lightboxSrcUrl = cloudinary.url(resource.public_id, {
        width: 1200, // Max width for lightbox
        height: 1200, // Max height for lightbox
        crop: 'limit', // Maintain aspect ratio, fit within dimensions
        quality: 'auto:best',
        format: 'webp',
      });


      return {
        id: resource.public_id,
        src: lightboxSrcUrl, // Or resource.secure_url
        thumbnailSrc: thumbnailUrl,
        alt: altText,
        width: resource.width,
        height: resource.height,
        title: title,
        description: description,
      };
    });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}