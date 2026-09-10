import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from './firebase';
import type { BlogPost } from '@/types';

const BLOGS_COLLECTION = 'blogs';

/**
 * Helper to calculate reading time in minutes for Arabic/mixed content (~180 words/min)
 */
export function calculateReadingTime(htmlContent: string): number {
  if (!htmlContent) return 1;
  const text = htmlContent.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 180));
}

/**
 * Creates an SEO and Arabic-friendly URL slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\u0621-\u064A\w\-]+/g, '') // Keep Arabic letters, English letters, numbers, and dashes
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
}

/**
 * Fetch all published blogs for public listing
 */
export async function getPublishedBlogs(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('isPublished', '==', true)
    );

    const snapshot = await getDocs(q);
    const blogs = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as BlogPost[];

    // In-memory sorting (avoids requiring a manual Firebase composite index)
    return blogs.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt || 0).getTime();
      const dateB = new Date(b.publishedAt || b.createdAt || 0).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching published blogs:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by its unique URL slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) {
    return null;
  }
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where('slug', '==', slug),
      limit(1)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;

    const docSnapshot = snapshot.docs[0];
    return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    } as BlogPost;
  } catch (error) {
    console.error(`Error fetching blog with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch all blogs for dashboard management (including drafts)
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}

/**
 * Create a new blog post
 */
export async function createBlog(
  blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'readingTime'>
): Promise<string> {
  const blogRef = doc(collection(db, BLOGS_COLLECTION));
  const now = new Date().toISOString();
  const readingTime = calculateReadingTime(blogData.content);

  const newPost: BlogPost = {
    ...blogData,
    id: blogRef.id,
    readingTime,
    createdAt: now,
    updatedAt: now,
    publishedAt: blogData.isPublished
      ? blogData.publishedAt || now
      : null,
  };

  await setDoc(blogRef, newPost);
  return blogRef.id;
}

/**
 * Update an existing blog post
 */
export async function updateBlog(
  id: string,
  blogData: Partial<BlogPost>
): Promise<void> {
  const blogRef = doc(db, BLOGS_COLLECTION, id);
  const now = new Date().toISOString();

  const updates: Partial<BlogPost> = {
    ...blogData,
    updatedAt: now,
  };

  if (blogData.content) {
    updates.readingTime = calculateReadingTime(blogData.content);
  }

  if (blogData.isPublished === true && !blogData.publishedAt) {
    updates.publishedAt = now;
  }

  await updateDoc(blogRef, updates as any);
}

/**
 * Delete a blog post by ID
 */
export async function deleteBlog(id: string): Promise<void> {
  const blogRef = doc(db, BLOGS_COLLECTION, id);
  await deleteDoc(blogRef);
}
