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
    <div className='swiper'>

        <div className='swiper-slide'>
        <img src='https://routine.vn/media/wysiwyg/slider/Holiday_Season_Sale_Th_ng_5_Web_Slider_1920x1000.jpg' />
        </div>

        <div className='swiper-slide'>
        <img src='https://routine.vn/media/wysiwyg/slider/Good_Mood_Good_Day_1920x1000_PC.jpg' />
        </div>


    </div>

  
  )
}

export default Banner