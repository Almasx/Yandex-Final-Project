import type { ReactNode } from "react";
import Point from "./point";

interface IWrapperProps {
  children: ReactNode;
}
const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <ul className="absolute bottom-8 z-20 mx-auto flex flex-row gap-8 rounded-2xl bg-dark-bg py-4  px-8">
      {children}
    </ul>
  );
};

const Location = { Wrapper, Point };
export default Location;
