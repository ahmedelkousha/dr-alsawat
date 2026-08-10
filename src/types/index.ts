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
  summary: string;
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
