// src/lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Define the CloudinaryImage interface
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

      // Create thumbnail with preserved aspect ratio - NO format parameter
      const thumbnailUrl = cloudinary.url(resource.public_id, {
        width: 600,
        crop: 'limit',
        quality: 'auto:good',
        // Remove format: 'auto' to prevent .auto extension
      });
      
      // Lightbox version with preserved aspect ratio - NO format parameter
      const lightboxSrcUrl = cloudinary.url(resource.public_id, {
        width: 1920,
        crop: 'limit',
        quality: 'auto:best',
        // Remove format: 'auto' to prevent .auto extension
      });

      return {
        id: resource.public_id,
        src: lightboxSrcUrl,
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

// Export cloudinary instance if needed elsewhere
export { cloudinary };