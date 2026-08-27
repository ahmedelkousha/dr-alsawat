import { AchievementItem, MediaAppearance, AwardItem } from '@/types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'مشاركة أكاديمية في المؤتمر الدولي لجراحات القولون والمستقيم',
    publisher: 'مجلة الجراحة السعودية',
    date: '2024',
    summary:
      'تقديم ورقة علمية حول أحدث تقنيات المنظار الجراحي والروبوت في جراحة القولون والمستقيم الحافظة للأعضاء.',
    imageUrl: '/images/logo-dark.jpg',
    articleUrl: 'https://example.com/article1',
  },
  {
    id: 'ach-2',
    title: 'إدخال تقنيات الليزر الحديثة في علاج أمراض المنطقة الشرجية بالطائف',
    publisher: 'صحيفة الرياض الطبية',
    date: '2023',
    summary:
      'تقرير صحفي يسلط الضوء على نتاجات إدخال تقنية SiLaC و FiLaC في علاج الناسور والبواسير بدون ألم.',
    imageUrl: '/images/logo-dark.jpg',
    articleUrl: 'https://example.com/article2',
  },
  {
    id: 'ach-3',
    title: 'نشر دراسة متميزة حول جراحات القولون بالمنظار بالزمالة الكورية',
    publisher: 'المجلة الطبية الأكاديمية',
    date: '2022',
    summary:
      'نشر بحث علمي متخصص بالتعاون مع المركز الطبي الجامعي في كوريا الجنوبية حول سلامة الجراحات طفيفة التوغل.',
    imageUrl: '/images/logo-dark.jpg',
    articleUrl: 'https://example.com/article3',
  },
];

export const mediaAppearancesData: MediaAppearance[] = [
  {
    id: 'media-1',
    title: 'تخصص الجراحة ودور الجراحين في رفع معانات المريض او حتى انقاذ حياته',
    event: 'برنامج فلاش باك',
    year: '2023',
    embedUrl: 'https://www.youtube.com/embed/-drCfrHNd8M?si=jcy3LR8cDoNn3kva',
    thumbnailUrl: '/images/doctor-portrait.png',
  },
  // {
  //   id: 'media-2',
  //   title: 'محاضرة علمية: التقنيات الروبوتية في الجراحة العامة بجامعة الطائف',
  //   event: 'الملتقى الطبي السنوي',
  //   year: '2023',
  //   embedUrl: 'https://www.youtube.com/embed/9M0kLoRZNls?si=NQp5zgQQalt5FTaY',
  //   thumbnailUrl: '/images/doctor-portrait.png',
  // },
];

export const awardsData: AwardItem[] = [
  {
    id: 'award-1',
    title: 'شهادة تقدير لتقديم بحث علمي متميز',
    organization: 'الجمعية الكورية للجراحة (المؤتمر السنوي KSS)',
    year: '2020',
    imageUrl: '/images/awards/1.webp',
  },
  {
    id: 'award-2',
    title: 'شهادة إتمام الدورة التدريبية',
    organization: 'مستشفى سيئول سونغ دو لراحة القولون والمستقيم',
    year: '2021',
    imageUrl: '/images/awards/2.webp',
  },
  {
    id: 'award-3',
    title: 'شهادة تميز علمي لافضل بحث منشور',
    organization: 'الملحقية الثقافية السعودية بكوريا الجنوبية',
    year: '2021',
    imageUrl: '/images/awards/3.webp',
  },
  {
    id: 'award-4',
    title: 'شهادة إتمام الزمالة في جراحة القولون والمستقيم',
    organization: 'مستشفى سيئول سانت ماري - جامعة كوريا الكاثوليكية',
    year: '2022',
    imageUrl: '/images/awards/4.webp',
  },
    {
    id: 'award-5',
    title: 'شهادة شكر وتقدير للتميز في الخدمات الصحية',
    organization: 'تجمع الطائف الصحي',
    year: '2023',
    imageUrl: '/images/awards/5.webp',
  },
];
