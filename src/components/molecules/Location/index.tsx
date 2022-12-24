import type { ReactNode } from "react";
import Point from "./Point";

interface IWrapperProps {
  children: ReactNode;
}
const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <ul className="dark:bg-primary-dark flex-wrap w-[80%] md:w-[50%] sm:w-[75%] lg:w-[90%] md:justify-betwee sm:justify-center justify-center bg-primary-light absolute bottom-16 z-20 mx-auto flex flex-row gap-8 rounded-2xl py-4  px-8">
      {children}
    </ul>
  );
};

const Location = { Wrapper, Point };
export default Location;
