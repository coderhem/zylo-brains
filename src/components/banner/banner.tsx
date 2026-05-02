'use client';
import Image from 'next/image'
import React from 'react'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerContent from "./bannerData.json";
const Banner = () => {
 return (
  <>
   <section className='hero'>
    <div className="relative">
     <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      // mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
     >
      {bannerContent.bannerData.map((item, index) => (
       <SwiperSlide key={index}>
        <Image
         src={item.imgSrc}
         width={item.imgWidth}
         height={item.imgHeight}
         alt={item.imgAlt}
         className={`max-sm:max-w-32`}
        />
        <div className="max-w-2xl mx-auto before:absolute before:inset-0 before:bg-black/90 text-white">
         <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
         <h1 className='mb-3'>Build Smart Digital <span className='text-primary'>Solutions For The Future</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia ipsum natus ea, esse autem velit error ipsam iusto, cupiditate veniam numquam blanditiis voluptatem minus illum. Error consectetur placeat laboriosam.</p>
          <div className="flex gap-5 justify-center pt-8">
           <a href="#" className='btn btn-primary'>Join Us</a>
           <a href="#" className='btn btn-outline'>Get in Touch</a>
          </div>
         </div>
        </div>
       </SwiperSlide>
      ))}

     </Swiper>
    </div>
   </section>
  </>
 )
}

export default Banner
