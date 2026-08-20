import { AchievementItem, MediaAppearance, AwardItem } from "@/types";

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "مشاركة أكاديمية في المؤتمر الدولي لجراحات القولون والمستقيم",
    publisher: "مجلة الجراحة السعودية",
    date: "2024",
    summary: "تقديم ورقة علمية حول أحدث تقنيات المنظار الجراحي والروبوت في جراحة القولون والمستقيم الحافظة للأعضاء.",
    imageUrl: "/images/logo-dark.jpg",
    articleUrl: "https://example.com/article1",
  },
  {
    id: "ach-2",
    title: "إدخال تقنيات الليزر الحديثة في علاج أمراض المنطقة الشرجية بالطائف",
    publisher: "صحيفة الرياض الطبية",
    date: "2023",
    summary: "تقرير صحفي يسلط الضوء على نتاجات إدخال تقنية SiLaC و FiLaC في علاج الناسور والبواسير بدون ألم.",
    imageUrl: "/images/logo-dark.jpg",
    articleUrl: "https://example.com/article2",
  },
  {
    id: "ach-3",
    title: "نشر دراسة متميزة حول جراحات القولون بالمنظار بالزمالة الكورية",
    publisher: "المجلة الطبية الأكاديمية",
    date: "2022",
    summary: "نشر بحث علمي متخصص بالتعاون مع المركز الطبي الجامعي في كوريا الجنوبية حول سلامة الجراحات طفيفة التوغل.",
    imageUrl: "/images/logo-dark.jpg",
    articleUrl: "https://example.com/article3",
  },
];

export const mediaAppearancesData: MediaAppearance[] = [
  {
    id: "media-1",
    title: "لقاء تلفزيوني: الوقاية والأعراض المبكرة لأمراض القولون والمستقيم",
    event: "برنامج صحتك أولاً",
    year: "2024",
    embedUrl: "https://www.youtube.com/embed/-drCfrHNd8M?si=jcy3LR8cDoNn3kva",
    thumbnailUrl: "/images/doctor-portrait.png",
  },
  {
    id: "media-2",
    title: "محاضرة علمية: التقنيات الروبوتية في الجراحة العامة بجامعة الطائف",
    event: "الملتقى الطبي السنوي",
    year: "2023",
    embedUrl: "https://www.youtube.com/embed/9M0kLoRZNls?si=NQp5zgQQalt5FTaY",
    thumbnailUrl: "/images/doctor-portrait.png",
  },
];

export const awardsData: AwardItem[] = [
  {
    id: "award-1",
    title: "شهادة الزمالة الكورية لجراحة القولون والمستقيم بالمنظار والروبوت",
    organization: "الجمعية الكورية لجراحة القولون والمستقيم",
    year: "2021",
    imageUrl: "/images/logo-dark.jpg",
  },
  {
    id: "award-2",
    title: "شهادة البورد السعودي في الجراحة العامة",
    organization: "الهيئة السعودية للتخصصات الصحية",
    year: "2019",
    imageUrl: "/images/logo-dark.jpg",
  },
  {
    id: "award-3",
    title: "درع التميز الأكاديمي والبحثي",
    organization: "كلية الطب - جامعة الطائف",
    year: "2023",
    imageUrl: "/images/logo-dark.jpg",
  },
];
