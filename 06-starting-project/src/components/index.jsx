import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

import heroImg from "../assets/topic-1.png";

function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative px-[8%] lg:px-[12%] pt-[5%]">
      {isReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500 }}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="mt-10 rounded-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="hero p-[70px] flex flex-col justify-between relative rounded-xl"
              style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="relative z-10 text-white">
                <p className="mb-3">
                  <span className="font-bold">Ethan Caldwell</span> on October 16, 2025
                </p>
                <h1 className="font-bold text-5xl mb-3 font-bricolage">
                  How Tech Shapes the Future of Work in 2025
                </h1>
                <p className="text-lg mb-5 text-gray-200">
                  Storytelling has become a powerful tool for connection in our modern world.
                </p>
                <button className="bg-white text-blue-700 font-bold px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
                  Discover More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      {/* 🔥 커스텀 네비게이션 버튼 */}
      <div
        ref={prevRef}
        className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-20 hover:scale-110 transition"
      >
        <i className="bi bi-arrow-left-circle-fill"></i>
      </div>

      <div
        ref={nextRef}
        className="custom-next absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-20 hover:scale-110 transition"
      >
        <i className="bi bi-arrow-right-circle-fill"></i>
      </div>
    </div>
  );
}

export default HeroSlider;

