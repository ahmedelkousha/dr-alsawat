import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';

export default function DoctorThomasHero() {
  return (
    <section className="w-full h-svh xl:h-dvh bg-[url('/images/bg-hero.jpeg')] bg-cover bg-left sm:bg-fixed bg-no-repeat text-[#2d4552] overflow-hidden font-cairo relative flex items-center justify-center pt-28 pb-6 xl:pt-0 xl:pb-0">
      <div className="max-w-[90%] w-full h-full mx-auto relative z-10 flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-8 items-center justify-center">
        {/* Center Doctor Quote Section */}
        <div className="w-full xl:col-span-4 basis-[70%] flex flex-col justify-start sm:justify-center xl:justify-end items-center sm:items-start sm:text-right xl:items-start order-2 xl:order-2 text-center xl:text-right">
          <div className="flex flex-col justify-end xl:text-nowrap">
            <span className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-bold tracking-wide leading-snug xl:leading-relaxed">
              الجراحة تصنع القادة،
            </span>
            <span className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold tracking-wide leading-snug xl:leading-relaxed mb-4 sm:mb-6 xl:mb-10">
              والقادة تصنع جيلاً من الجراحين
            </span>
            <span className="text-xl sm:text-sm md:text-xl lg:text-2xl text-white/90 font-bold tracking-wide">
              دكتور عبدالله الصواط
            </span>
          </div>
        </div>

        {/* Center Column: Cutout / Portrait Doctor Image */}
        <div className="w-full xl:col-span-5 absolute -bottom-20 flex xl:flex justify-center sm:justify-end items-end order-1 xl:order-1 h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh] xl:h-full xl:relative -z-10">
          <div className="relative w-[70vw] sm:w-[320px] md:w-[460px] lg:w-[480px] xl:w-[80%] h-full xl:h-[90%] overflow-hidden flex items-end justify-center">
            <Image
              src="/images/doc-edited1.png"
              alt={doctorData.name}
              fill
              className="object-contain xl:object-cover object-bottom xl:object-top"
              priority
            />
          </div>
        </div>

        {/* Stats Column */}
        <div className="w-full h-full xl:col-span-3 basis-[30%] flex justify-center sm:justify-start xl:justify-end gap-8 sm:gap-12 items-end sm:items-center xl:items-end order-3 xl:order-3 xl:pb-25 pb-0 text-4xl pt-2 xl:pt-0">
          <div className="flex flex-col items-center xl:items-start gap-1 sm:bg-transparent sm:rounded-none sm:p-0 sm:shadow-none bg-navy/90 p-2 rounded-lg shadow-lg">
            <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary">
              +10
            </span>
            <span className="2xl:text-xl text-xs sm:text-sm lg:text-base text-white/90 font-bold drop-shadow-navy drop-shadow-sm">
              سنوات من الخبرة
            </span>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-1 sm:bg-transparent sm:rounded-none sm:p-0 sm:shadow-none bg-navy/90 p-2 rounded-lg shadow-lg">
            <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary">
              +3000
            </span>
            <span className="2xl:text-xl text-xs sm:text-sm lg:text-base text-white/90 font-bold drop-shadow-navy drop-shadow-sm">
              حالة تم علاجها
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1e323e]/50 via-transparent to-transparent pointer-events-none" />
      
    </section>
  );
}
