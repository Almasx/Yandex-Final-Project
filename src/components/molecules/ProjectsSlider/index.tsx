
interface IProjectsSliderProps {
  projects: any[];
  load: (e: any) => void;
}

const ProjectsSlider = ({ projects, load }: IProjectsSliderProps) => {
  return (
    <div className="col-span-full mt-20">

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
