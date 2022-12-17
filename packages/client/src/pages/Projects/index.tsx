import Navigation from "../../common/components/molecules/Navigation";
import ProjectsSlider from "../../common/components/molecules/ProjectsSlider";

const Projects = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-white font-bold text-6xl">Works we proud of </h1>
            <span className="opacity-60 text-white mt-5 max-w-[512px] text-center text-xl font-normal">Fermentum tellus nec volutpat non enim consequat adcsddipiscing euismod. Mi et tortor dolor nec eu </span>
            <button className="py-2 px-4 rounded-md mt-4 bg-white">I want to work with you 🡥</button>
        </div>
        <ProjectsSlider/>
      </div>
    </div>
  );
};

export default Projects;
