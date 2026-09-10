/**
 * Client-safe Cloudinary URL optimization helper
 * Safely runs in both client ('use client') and server environments
 */
export function getOptimizedImageUrl(
  url: string,
  options: { width?: number; quality?: string | number } = {}
): string {
  if (!url || !url.includes('cloudinary.com')) return url;

  const { width, quality = 'auto' } = options;
  const transformations: string[] = ['f_auto', `q_${quality}`];

  if (width) {
    transformations.push(`w_${width}`, 'c_limit');
  }

  const transformString = transformations.join(',');
  return url.replace('/image/upload/', `/image/upload/${transformString}/`);
}
