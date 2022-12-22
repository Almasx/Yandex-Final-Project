import React from "react";
import Button from "../components/atoms/Button";
import ProjectSlider from "../components/molecules/ProjectsSlider";
import { trpc } from "../utils/trpc";

const projects = () => {
  return (
    <>
      <div className="col-span-6 col-start-4 mt-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-black dark:text-white">
          Works we proud of
        </h1>
        <span className="mt-5 max-w-[512px] text-center text-xl font-normal text-black opacity-60 dark:text-white">
          Fermentum tellus nec volutpat non enim consequat adcsddipiscing
          euismod. Mi et tortor dolor nec eu
        </span>
        <Button className="mt-4 rounded-lg bg-black font-medium text-white dark:bg-white dark:text-dark-bg">
          I want to work with you 🡥
        </Button>
      </div>

      <ProjectSlider />
    </>
  );
};

export default projects;
