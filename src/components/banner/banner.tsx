'use client';
import Image from 'next/image'
import React from 'react'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerContent from "./bannerData.json";

type BannerItem = {
 imgSrc: string;
 imgWidth: number;
 imgHeight: number;
 imgAlt: string;
 heading: string;
 highlightHeading: string;
 description: string;
 ctaOneText: string;
 ctaTwoText: string;
 ctaOneLink: string;
 ctaTwoLink: string;
};


const Banner: React.FC = () => {
 const bannerData = bannerContent.bannerData as BannerItem[];
 return (
  <section className='hero'>
   <div className="relative">
    <Swiper
     allowTouchMove={true}
     simulateTouch={true}
     grabCursor={true}
     navigation={true}
     pagination={{ clickable: true }}
     keyboard={true}
     loop={true}
     autoplay={{
      delay: 7000, // 5 seconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
     }}
     modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
     className="heroSwiper"
    >
     {bannerData.map((item: BannerItem, index: number) => (
      <SwiperSlide key={index} className='relative before:absolute before:inset-0 before:bg-black/80 before:z-1'>
       <Image
        src={item.imgSrc}
        width={item.imgWidth}
        height={item.imgHeight}
        alt={item.imgAlt}
        className={`max-sm:max-w-32 absolute inset-0 -z-1 h-full object-center object-cover`}
       />
       <div className="py-20 xl:py-24 relative z-2 max-w-2xl mx-auto text-center text-white px-5 md:px-8">
        <h1 className='mb-3'>{item.heading}<span className='text-primary'> {item.highlightHeading} </span></h1>
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
        <div className="flex gap-5 justify-center pt-8">
         <a href={`${item.ctaOneLink}`} className='btn btn-primary'>{item.ctaOneText}</a>
         <a href={`${item.ctaTwoLink}`} className='btn btn-outline'>{item.ctaTwoText}</a>
        </div>
       </div>
      </SwiperSlide>
     ))}
    </Swiper>
   </div>
  </section>
 )
}

export default Banner
