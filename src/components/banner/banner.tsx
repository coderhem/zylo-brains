'use client';
import Image from 'next/image'
import React from 'react'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
 return (
  <>
   <section className=''>
    <div className="">
     <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
     >
      <SwiperSlide>
       <Image
        src="/images/banner-image.jpg"
        width={1440}
        height={720}
        alt='Header Logo'
        className='max-sm:max-w-32'
       />
      </SwiperSlide>
 
     </Swiper>
    </div>
   </section>
  </>
 )
}

export default Banner
