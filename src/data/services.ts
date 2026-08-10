import { MedicalService } from "@/types";

export const medicalFeatures: MedicalService[] = [
  {
    id: "trusted-surgeon",
    title: "جراح يمكنك الاعتماد عليه",
    description: "خبرة أكاديمية واكليينية متميزة في الجراحة العامة وجراحة القولون والمستقيم والزمالة الكورية.",
    iconName: "Award",
  },
  {
    id: "advanced-equipment",
    title: "أجهزة متطورة وحديثة",
    description: "استخدام أحدث أجهزة المنظار والتقنيات الجراحية الحديثة لضمان الدقة والأمان.",
    iconName: "Stethoscope",
  },
  {
    id: "home-visits",
    title: "الزيارات المنزلية",
    description: "تقديم خدمات التقييم والمتابعة المنزلية للحالات الخاصة والمحتاجة للرعاية المستمرة.",
    iconName: "Home",
  },
  {
    id: "nursing-staff",
    title: "موظفي التمريض",
    description: "طاقم تمريض مؤهل ومدرّب على أعلى مستوى لرعاية المرضى قبل وبعد العمليات.",
    iconName: "Users",
  },
  {
    id: "emergency-services",
    title: "خدمات الطوارئ",
    description: "جاهزية تامة للتعامل مع الحالات الجراحية العاجلة وطوارئ القولون والمنطقة الشرجية.",
    iconName: "Siren",
  },
  {
    id: "excellent-facilities",
    title: "مرافق ممتازة",
    description: "مجمع طبي مجهز بأحدث غرف العمليات ووسائل الراحة لتجربة علاجية متكاملة.",
    iconName: "Building2",
  },
];

export const specialtyOverview = [
  {
    id: "colon-surgeries",
    title: "جراحات القولون",
    subtitle: "Colon Surgeries",
    description: "تشخيص وعلاج أورام القولون، الداء الرتجي، والتهابات الأمعاء المزمنة بالمنظار الجراحي المتقدم وتقنيات استئصال القولون الجزئي أو الكلي.",
    link: "/colon-rectal-surgery",
    linkText: "اقرأ أكثر",
  },
  {
    id: "rectal-surgeries",
    title: "جراحات المستقيم",
    subtitle: "Rectal Surgeries",
    description: "جراحات استئصال أورام المستقيم مع الحفاظ على الأعضاء والوظائف الطبيعية باستخدام التقنيات الروبوتية والمناظير الدقيقة.",
    link: "/colon-rectal-surgery",
    linkText: "اقرأ أكثر",
  },
  {
    id: "anal-region-surgeries",
    title: "جراحات المنطقة الشرجية",
    subtitle: "Anal Region Surgeries",
    description: "علاج متقدم وشامل لأمراض أمراض المنطقة الشرجية بالطرق الجراحية والليزر والتقنيات حديثة التدخل طفيف التوغل.",
    link: "/anal-surgery/hemorrhoids",
    linkText: "استكشف العمليات",
    subLinks: [
      { title: "الناسور العصعصي", href: "/anal-surgery/pilonidal-sinus" },
      { title: "الشرخ الشرجي", href: "/anal-surgery/anal-fissure" },
      { title: "النواسير الشرجية", href: "/anal-surgery/anal-fistula" },
      { title: "البواسير الشرجية", href: "/anal-surgery/hemorrhoids" },
    ],
  },
];

export const consultationInfo = {
  title: "الإستشارات الطبية والجراحية",
  subtitle: "Consultation Services",
  description: "نقدم في عيادتنا استشارات جراحية متكاملة تغطي التقييم الإكلينيكي الدقيق، مراجعة الفحوصات والتحاليل، ووضع خطة علاجية مخصصة تشمل الخيارات التحفظية والتقنيات الجراحية الحديثة. نسعى دائماً إلى توفير بيئة مريحة للمريض والإجابة على كافة تساؤلاته بشفافية ووضوح.",
};
