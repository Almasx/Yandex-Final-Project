import React from "react";
import Button from "../components/atoms/Button";
import ProjectsSlider from "../components/molecules/ProjectsSlider";

const projects = () => {
  return (
    <>
      <div className="col-span-6 col-start-4 mt-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">Works we proud of </h1>
        <span className="mt-5 max-w-[512px] text-center text-xl font-normal text-white opacity-60">
          Fermentum tellus nec volutpat non enim consequat adcsddipiscing
          euismod. Mi et tortor dolor nec eu{" "}
        </span>
        <Button className="mt-4 rounded-lg font-medium">
          I want to work with you 🡥
        </Button>
      </div>
      <ProjectsSlider />
    </>
  );
};

export default projects;
