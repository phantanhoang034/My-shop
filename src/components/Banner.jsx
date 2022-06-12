import React from "react";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";



// // import required modules
// import { Mousewheel, Pagination, Autoplay } from "swiper";





const Banner = () => {
  return (
    <div>
       {/* <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={{delay:3000,disableOnInteraction:false,}}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="swiper"
      >
        <SwiperSlide>  <img src='https://routine.vn/media/wysiwyg/slider/Holiday_Season_Sale_Th_ng_5_Web_Slider_1920x1000.jpg' /></SwiperSlide>
        <SwiperSlide> <img src="https://routine.vn/media/wysiwyg/slider/Polo_Premium_1920x1000pc.jpg" /></SwiperSlide>
        
        <SwiperSlide><img src='https://routine.vn/media/wysiwyg/slider/Good_Mood_Good_Day_1920x1000_PC.jpg' /></SwiperSlide>
        
      </Swiper>
    </> */}

    
    
    <div className='swiper'>
      <div className='swiper-swiper'>

        <div className='swiper-slide'>
        <img src="https://routine.vn/media/wysiwyg/slider/Polo_Premium_1920x1000pc.jpg" />
        </div>

        <div className='swiper-slide'>
        <img src='https://routine.vn/media/wysiwyg/slider/Holiday_Season_Sale_Th_ng_5_Web_Slider_1920x1000.jpg' />
        </div>

        <div className='swiper-slide'>
        <img src='https://routine.vn/media/wysiwyg/slider/Good_Mood_Good_Day_1920x1000_PC.jpg' />
        </div>

      </div>
    </div>

    </div>
  )
}

export default Banner