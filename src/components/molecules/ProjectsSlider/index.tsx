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
        <div className="dark:border-dark-gray border-light-gray-200 mt-11 flex flex-row items-center gap-[6px] rounded-2xl border p-2">
        <svg
            className="arrow-right w-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z"
              fill-opacity="0.6"
              className="dark:fill-white fill-black"
            />
          </svg>
          <div className="swiper-pagination opacity-60 min-w-[40px]"></div>
          <svg
            className="arrow-left w-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
              fill-opacity="0.6"
              className="dark:fill-white fill-black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
