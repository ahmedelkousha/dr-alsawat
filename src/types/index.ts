export interface MedicalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AnalSurgeryCondition {
  slug: string;
  title: string;
  subtitle: string;
  img?: string;

  description: string;
  whatIsIt: string;
  symptomsAndCauses: {
    symptoms: string[];
    causes: string[];
  };
  treatmentOptions: string[];
  postOpRecovery: string;
  warningSigns: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  publisher: string;
  date?: string;
  summary?: string;
  imageUrl?: string;
  articleUrl?: string;
}

export interface MediaAppearance {
  id: string;
  title: string;
  event: string;
  year: string;
  embedUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  procedure?: string;
  date?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML string from TipTap
  coverImage: string; // Cloudinary URL
  coverImageAlt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string | null; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  isPublished: boolean;
  metaTitle?: string;
  metaDescription?: string;
  readingTime?: number; // In minutes
  relatedServiceSlug?: string;
}

export const BLOG_CATEGORIES = [
  'جراحات الشرج والليزر',
  'جراحات القولون والمستقيم',
  'أورام الجهاز الهضمي والمنظار',
  'نصائح طبية ووقائية',
  'أحدث التقنيات الجراحية',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
