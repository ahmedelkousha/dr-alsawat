export const doctorData = {
  name: 'د. عبدالله الصواط',
  title: 'استشاري الجراحة العامة وجراحة القولون والمستقيم',
  subtitle:
    'استشاري الجراحة العامة وجراحة القولون والمستقيم – رئيس قسم الجراحة بجامعة الطائف',
  universityTitle: 'رئيس قسم الجراحة بجامعة الطائف',
  shortIntro:
    'أسعى لتقديم أرقى مستويات الرعاية الجراحية المتخصصة في القولون والمستقيم وجراحات المنطقة الشرجية بدقة وأمان عاليين.',
  taglineHeader: 'بكلمات قصيرة',
  taglineContent:
    'أقدم استشارات ورعاية جراحية متقدمة في القولون، المستقيم، والمنطقة الشرجية باستخدام أحدث التقنيات الطبية والمنظار والتدخلات طفيفة التوغل.',

  workingHours: 'كل أحد وثلاثاء من 5 لـ 8 مساءً',
  workingHoursSummary: 'الأحد والثلاثاء: 5:00 مساءً – 8:00 مساءً',

  phoneDisplay: '920008515',
  phoneRaw: '920008515',
  email: 'dralsawat9189@gmail.com',
  whatsappNumber: '966535479054',
  drNumber: '+966535479054',
  whatsappMessage: 'السلام عليكم، أرغب في الاستفسار عن المواعيد المتاحة لدى د. عبدالله الصواط',
  
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  bookingUrl: 'https://shorturl.at/pwXNr',

  clinicName: 'مجمع تداوي الجراحي الطبي بالطائف',
  clinicAddress: 'الطائف – مجمع تداوي الجراحي الطبي، المملكة العربية السعودية',
  clinicLocationIframe:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2611444177064!2d40.4085086!3d21.2611281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98f401d33f3b5%3A0x882bd2ea4daabb1d!2z2LnZitin2K_YqSDYp9mE2K_Zg9iq2YjYsSDYudio2K_Yp9mE2YTZhyDYp9mE2LXZiNin2Lc!5e0!3m2!1sen!2seg!4v1787546655089!5m2!1sen!2seg',
  clinicLocationURL: 'https://maps.app.goo.gl/RzshRhAwghsyTqaF9?g_st=ic',

  socials: {
    get whatsapp() {
      return doctorData.whatsappUrl;
    },
    twitter: 'https://x.com/DrAlSawat',
    instagram: 'https://www.instagram.com/DRALSAWAT',
  },

  credentials: [
    'استشاري الجراحة العامة وجراحة القولون والمستقيم',
    'رئيس قسم الجراحة بجامعة الطائف',
    'الزمالة الكورية لجراحات القولون والمستقيم بالمنظار الجراحي والروبوت',
    'البورد السعودي والأردني للجراحة العامة',
    'عضو الجمعية السعودية لجراحة القولون والمستقيم',
  ],

  valuePillars: [
    {
      title: 'نجاح الشفاء',
      description:
        'نسب نجاح عالية بفضل تطبيق أحدث البروتوكولات الطبية المعتمدة دولياً.',
      icon: 'ShieldCheck',
    },
    {
      title: 'التفاني للمريض',
      description:
        'تقديم رعاية شخصية وتواصل مستمر مع المريض خلال رحلة العلاج والتعافي.',
      icon: 'HeartHandshake',
    },
    {
      title: 'نجاح الجراحة',
      description:
        'استخدام الجراحات طفيفة التوغل والمنظار لتسريع الشفاء وتقليل الألم.',
      icon: 'Activity',
    },
    {
      title: 'الرعاية الصريحة',
      description:
        'شفافية كاملة في التشخيص وخطط العلاج والمتابعة بدون أي غموض.',
      icon: 'UserCheck',
    },
  ],

  emergencyBanner: {
    title: 'هل لديك حالة طوارئ؟ احجز زيارتك',
    description: 'أنا مستعد للاستجابة السريعة وتقديم التقييم الجراحي العاجل.',
    ctaText: 'حجز موعد طارئ',
  },

  whatsappBanner: {
    title: 'في حالة طلب استشارة أو السؤال',
    subtitle:
      'تواصل مباشرة مع د. عبدالله الصواط عبر الواتساب للحصول على إجابات سريعة وتحديد موعد استشارتك في العيادة.',
    ctaText: 'تواصل عبر الواتساب',
  },

  doctorBioSummary:
    'الدكتور عبدالله الصواط حاصل على الزمالة الكورية في جراحة القولون والمستقيم بالمنظار والروبوت الجراحي، والبورد السعودي والأردني للجراحة العامة. يشغل منصب رئيس قسم الجراحة بجامعة الطائف، ويمتلك خبرة واسعة في علاج أورام القولون والمستقيم وجراحات المنطقة الشرجية مع التركيز على التقنيات الحديثة التي تضمن راحة المريض وأقصى درجات الأمان.',
};
