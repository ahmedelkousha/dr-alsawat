'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '@/lib/blogService';
import type { BlogPost } from '@/types';

// Query Keys
export const blogKeys = {
  all: ['blogs'] as const,
  published: () => [...blogKeys.all, 'published'] as const,
  adminAll: () => [...blogKeys.all, 'admin-all'] as const,
  detail: (slug: string) => [...blogKeys.all, 'detail', slug] as const,
};

/**
 * Hook to fetch published blogs
 */
export function usePublishedBlogs(initialData?: BlogPost[]) {
  return useQuery({
    queryKey: blogKeys.published(),
    queryFn: () => getPublishedBlogs(),
    initialData,
  });
}

/**
 * Hook to fetch single blog by slug
 */
export function useBlogBySlug(slug: string, initialData?: BlogPost | null) {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: () => getBlogBySlug(slug),
    initialData: initialData ?? undefined,
    enabled: Boolean(slug),
  });
}

/**
 * Hook to fetch all blogs for dashboard
 */
export function useAllBlogs() {
  return useQuery({
    queryKey: blogKeys.adminAll(),
    queryFn: () => getAllBlogs(),
  });
}

/**
 * Helper to trigger on-demand revalidation on Next.js
 */
async function triggerRevalidation(path?: string) {
  try {
    await fetch('/api/revalidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path,
        secret: process.env.NEXT_PUBLIC_REVALIDATION_SECRET,
      }),
    });
  } catch (err) {
    console.warn('Revalidation trigger failed (normal in local dev):', err);
  }
}

/**
 * Mutation to create blog
 */
export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'readingTime'>
    ) => {
      const id = await createBlog(blogData);
      await triggerRevalidation(`/blogs/${blogData.slug}`);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: blogKeys.all });
    },
  });
}

/**
 * Mutation to update blog
 */
export function useUpdateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<BlogPost>;
    }) => {
      await updateBlog(id, data);
      if (data.slug) {
        await triggerRevalidation(`/blogs/${data.slug}`);
      } else {
        await triggerRevalidation();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: blogKeys.all });
    },
  });
}

/**
 * Mutation to delete blog
 */
export function useDeleteBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, slug }: { id: string; slug?: string }) => {
      await deleteBlog(id);
      if (slug) {
        await triggerRevalidation(`/blogs/${slug}`);
      } else {
        await triggerRevalidation();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: blogKeys.all });
    },
  });
}
