import React from "react";
import Circle from "../icons/circle";
import Star from "../icons/star";

const HeroSection = () => {
  return (
    <section className="relative col-span-full h-screen ">
      <div className="absolute h-full w-full scale-110">
        <div className="absolute inset-0 m-auto aspect-square h-5/6 object-cover">
          <Circle size="85" />
          <div className="sun">
            <div className="dot">
              <Star />
            </div>
          </div>
          <Circle size="65" />
          <div className="sun-min sun">
            <div className="dot">
              <Star />
            </div>
          </div>
          <Circle size="105" />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h2 className="mb-8 max-w-3xl text-center text-5xl font-bold text-dark-text dark:text-white-text md:mx-8">
          Meet our team of designers and software engineers
        </h2>
        <p className="mb-8 max-w-lg text-center text-black/30 dark:text-white/30 md:mx-5 lg:text-lg">
          Fermentum tellus nec volutpat non enim consequat adcsddipiscing
          euismod. Mi et tortor dolor nec eu
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
