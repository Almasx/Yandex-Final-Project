import clsx from "clsx";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav
      className={clsx(
        className,
        "flex w-full flex-row items-center justify-between text-white text-sm uppercase",
        "border-b border-b-gray bg-black/80 px-10 h-16 backdrop-blur-2xl"
      )}
    >
      <Logo />
      <div className="flex flex-row gap-5 text-white/30 capitalize font-light ">
        <Link to="/" className="hover:text-white duration-200">
          Home
        </Link>
        <Link to="/" className="hover:text-white duration-200">
          Projects
        </Link>
        <Link to="/" className="hover:text-white duration-200">
          Team
        </Link>
      </div>
      <button className="font-medium">Contact</button>
    </nav>
  );
};

export default Navigation;
