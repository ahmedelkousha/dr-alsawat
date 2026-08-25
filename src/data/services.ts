import { MedicalService } from '@/types';

export const medicalFeatures: MedicalService[] = [
  {
    id: 'trusted-surgeon',
    title: 'جراح يمكنك الاعتماد عليه',
    description:
      'خبرة أكاديمية وإكلينيكية متميزة في الجراحة العامة وجراحة القولون والمستقيم والزمالة الكورية.',
    iconName: 'Award',
  },
  {
    id: 'advanced-equipment',
    title: 'تقنيات جراحية حديثة أستخدمها',
    description:
      'أستخدم أحدث أجهزة المنظار والتقنيات الجراحية الحديثة لضمان أعلى دقة وأمان لمرضاي.',
    iconName: 'Microscope',
  },
  {
    id: 'home-visits',
    title: 'متابعة شخصية بعد الجراحة',
    description:
      'أتابع حالة مرضاي شخصياً قبل وبعد الجراحة لضمان تعافيهم بشكل آمن ومريح.',
    iconName: 'ClipboardPlus',
  },
  {
    id: 'nursing-staff',
    title: 'فريقي التمريضي المساند',
    description:
      'أعمل مع فريق تمريضي مؤهل ومدرّب بعناية لمساعدتي في تقديم أفضل رعاية ممكنة.',
    iconName: 'Users',
  },
  {
    id: 'emergency-services',
    title: 'جاهزيتي للحالات العاجلة',
    description:
      'أنا على أتم الاستعداد لتقييم الحالات الجراحية العاجلة وطوارئ القولون والمنطقة الشرجية.',
    iconName: 'Siren',
  },
  {
    id: 'excellent-facilities',
    title: 'بيئة العيادة المجهزة',
    description:
      'أقدم خدماتي في بيئة مجهزة بأحدث غرف العمليات ووسائل الراحة لتجربة علاجية مريحة.',
    iconName: 'Building2',
  },
];

export const specialtyOverview = [
  {
    id: 'colon-surgeries',
    title: 'جراحات القولون',
    subtitle: 'Colon Surgeries',
    description:
      'تشخيص وعلاج أورام القولون، الداء الرتجي، والتهابات الأمعاء المزمنة بالمنظار الجراحي المتقدم وتقنيات استئصال القولون الجزئي أو الكلي.',
    image: '/images/colon.webp',
    link: '/colon-surgery',
    linkText: 'اقرأ أكثر',
  },
  {
    id: 'rectal-surgeries',
    title: 'جراحات المستقيم',
    subtitle: 'Rectal Surgeries',
    description:
      'جراحات استئصال أورام المستقيم مع الحفاظ على الأعضاء والوظائف الطبيعية باستخدام التقنيات الروبوتية والمناظير الدقيقة.',
    image: '/images/rectal.jpeg',
    link: '/rectal-surgery',
    linkText: 'اقرأ أكثر',
  },
  {
    id: 'anal-region-surgeries',
    title: 'جراحات المنطقة الشرجية',
    subtitle: 'Anal Region Surgeries',
    description:
      'علاج متقدم وشامل لأمراض المنطقة الشرجية بالطرق الجراحية والليزر والتقنيات حديثة التدخل طفيف التوغل.',
    image: '/images/anal.webp',
    link: '/anal-surgery/hemorrhoids',
    linkText: 'استكشف العمليات',
    subLinks: [
      { title: 'الناسور العصعصي', href: '/anal-surgery/pilonidal-sinus' },
      { title: 'الشرخ الشرجي', href: '/anal-surgery/anal-fissure' },
      { title: 'النواسير الشرجية', href: '/anal-surgery/anal-fistula' },
      { title: 'البواسير الشرجية', href: '/anal-surgery/hemorrhoids' },
    ],
  },
];

export const consultationInfo = {
  title: 'الإستشارات الطبية والجراحية',
  subtitle: 'Consultation Services',
  description:
    'أقدم في عيادتي استشارات جراحية متكاملة تغطي التقييم الإكلينيكي الدقيق، مراجعة الفحوصات والتحاليل، ووضع خطة علاجية مخصصة تشمل الخيارات التحفظية والتقنيات الجراحية الحديثة. أحرص دائماً على توفير بيئة مريحة للمريض والإجابة على كافة تساؤلاتك بشفافية ووضوح.',
};
