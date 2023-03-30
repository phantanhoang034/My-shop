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
        <img src='https://routine.vn/media/banner/tmp/images/E-com_Resize_tang_B_nh_n_c_1920x984_-_update.jpg' />
        </div>

        <div className='swiper-slide'>
        <img src='https://routine.vn/media/banner/tmp/images/Valentine_resize_ECOM_1920X984.jpg' />
        </div>


    </div>

  
  )
}

export default Banner