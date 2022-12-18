import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSlider = () => {
  return (
    <div className="col-span-full mt-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={{
          prevEl: ".arrow-right",
          nextEl: ".arrow-left",
          disabledClass: "disable",
        }}
        pagination={{
          type: "fraction",
          el: '.swiper-pagination'
        }}
      >
        {Array(7).fill(
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex justify-center">
        <div className="border-dark-gray mt-11 flex flex-row items-center gap-[6px] rounded-2xl border p-2">
          <img src="./icons/ArrowRight.svg" alt="" className="arrow-right" />
          <div className="swiper-pagination opacity-60 min-w-[40px]"></div>
          <img src="./icons/ArrowLeft.svg" alt="" className="arrow-left" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
