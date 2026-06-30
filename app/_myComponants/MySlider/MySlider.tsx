// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MySlider ({imagesList,slidesPerView=1,spaceBetween=1} :
     {imagesList : string[] , slidesPerView?:number,spaceBetween?:number}) {
  return (
    <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      navigation
    pagination={{ clickable: true ,renderBullet(index, className) {
        return `<span class =" ${className} w-5! h-5! bg-gray-500!"></span>`
    },bulletActiveClass:'w-10! h-6! bg-white! rounded-xl'}}
    >
        {imagesList.map(imgsrc=> 
        <SwiperSlide key={imgsrc}><img src={imgsrc} alt="" className='w-full max-h-75' />
        </SwiperSlide>)}
    
    
      ...
    </Swiper>
  );
};