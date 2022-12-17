import { ReactNode } from "react";
import Point from "./Point";

interface IWrapperProps {
  children: ReactNode;
}
const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <ul className="w-[824px] h-[75px] rounded-2xl bg-dark-bg absolute bottom-8 mx-auto flex z-20 justify-between py-4 px-8 lg:flex-wrap lg:w-96 lg:h-40">
      {children}
    </ul>
  );
};

const Location = { Wrapper, Point };
export default Location;
