import { removeBackground, loadImage } from '@/lib/removeBackground';

export const processFaviconImage = async (imageUrl: string): Promise<string> => {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Load the image as HTMLImageElement
    const imageElement = await loadImage(blob);
    
    // Remove the background
    const processedBlob = await removeBackground(imageElement);
    
    // Create a new blob URL for the processed image
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error processing favicon:', error);
    throw error;
  }
};