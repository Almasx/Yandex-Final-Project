import Link from "next/link";
import { useEffect, useState } from "react";
import HLogo from "../icons/header-logo";

const Navigation = () => {
  const [theme, setTheme] = useState<boolean>(false); // default light
  const colorTheme = theme ? "dark" : "light";

  const onClick = () => {
    setTheme((previos) => !previos);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme ? "light" : "dark");
    root.classList.add(colorTheme);

    localStorage.setItem("theme", colorTheme);
    console.log(colorTheme === "dark" ? "light" : "dark", colorTheme);
  }, [colorTheme, setTheme]);

  return (
    <nav
      className="fixed z-20 flex h-16 w-full items-center justify-center border-b border-b-light-gray-200 bg-white/60 text-sm
    uppercase text-black backdrop-blur-2xl dark:border-b-gray-200 dark:bg-black/60 dark:text-white "
    >
      <div className="flex w-[1200px] flex-row items-center justify-between">
        <div className="w-40">
          <HLogo/>
        </div>
        <div className="flex flex-row gap-5 font-light capitalize text-black/30 dark:text-white/30 ">
          <Link
            href="/"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Team
          </Link>
        </div>
        <div className="flex w-40 flex-row items-center gap-3 ">
          <button onClick={onClick} className="flex flex-row truncate">
            <span className="mr-1">⬤</span> {theme ? "Dark" : "Light"} Theme
          </button>
          <Link href="/contact">
            <button className="font-medium">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
