import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";

const Navigation = () => {
  const [theme, setTheme] = useState<boolean>(false); // default light
  const colorTheme = theme ? "dark" : "light";
  const { locale, pathname, push, asPath } = useRouter();

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
          <img className="dark:invert" src="/icons/header-logo.svg" alt="" />
        </div>
        <div className="flex flex-row gap-5 font-light capitalize text-black/30 dark:text-white/30 ">
          <Link
            href="/"
            className={clsx(
              "duration-200 hover:text-black dark:hover:text-white",
              pathname.endsWith("/") && "text-black dark:text-white"
            )}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={clsx(
              "duration-200 hover:text-black dark:hover:text-white",
              pathname.endsWith("/projects") && "text-black dark:text-white"
            )}
          >
            Projects
          </Link>
          <Link
            href="/team"
            className={clsx(
              "duration-200 hover:text-black dark:hover:text-white",
              pathname.endsWith("/team") && "text-black dark:text-white"
            )}
          >
            Team
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3 ">
          <Link
            className={clsx(locale === "en" && "underline")}
            href={asPath}
            locale="en"
          >
            en
          </Link>

          <Link
            className={clsx(locale === "ru" && "underline")}
            href={asPath}
            locale="ru"
          >
            ru
          </Link>
          <button onClick={onClick} className="flex flex-row truncate">
            <span className="mr-1">⬤</span> {theme ? "Dark" : "Light"} Theme
          </button>
          <Button
            onClick={() => push("/contact")}
            className="rounded-lg px-2 py-1  font-medium"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
