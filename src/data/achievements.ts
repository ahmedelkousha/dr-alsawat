import { AchievementItem, MediaAppearance, AwardItem } from '@/types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title:
      'لأول مرة على مستوى المحافظة.. إصلاح فتق المستقيم لمريضة بـ"تخصصي الطائف"',
    publisher: 'صحيفة سبق الإخبارية',
    date: '2022',
    imageUrl: '/images/articles/sabq.png',
    articleUrl: 'https://sabq.org/article/HI8Xj8y',
  },
  {
    id: 'ach-2',
    title: 'سعودي يفوز بجائزة أفضل بحث أورام بمؤتمر سيؤول الدولي',
    publisher: '‏صحيفة أول سعوديـ/ـة',
    date: '2021',
    imageUrl: '/images/articles/awl-saudi.png',
    articleUrl: 'https://www.first1saudi.net/14169.html',
  },
  
  {
    id: 'ach-3',
    title: 'استئصال ورم لمفاوي نادر في الأمعاء لمريض ثلاثيني بـ "تخصصي الطائف',
    publisher: 'صحيفة سبق الإخبارية',
    date: '2022',
    imageUrl: '/images/articles/sabq.png',
    articleUrl: 'https://sabq.org/article/UYWPOXa',
  },
  {
    id: 'ach-4',
    title:
      'مريض خمسيني يتعافى ويغادر تخصصي الطائف خلال ٤٨ ساعة كان يعاني من إنسداد بالأمعاء',
    publisher: 'صحيفة نبض الإخبارية',
    date: '2024',
    imageUrl: '/images/articles/nabd.png',
    articleUrl: 'https://nabdapp.com/t/130917558',
  },
  {
    id: 'ach-5',
    title: 'فريق جراحي سعودي يجري عملية لقولون مريض سبعيني بـ"تخصصي الطائف"',
    publisher: 'صحيفة سبق الإخبارية',
    date: '2023',
    imageUrl: '/images/articles/sabq.png',
    articleUrl: 'https://sabq.org/article/CfssOHO',
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
