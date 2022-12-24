import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useScreen from "../../../hooks/useScreen";
import Button from "../../atoms/Button";
import LanguageSwitch from "./LanguageSwitch";
import Links from "./Links";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  const { isPhone } = useScreen();
  const { push } = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <nav
        className="fixed z-20 flex h-12 w-full  items-center justify-center 
        border-b border-b-gray-light-secondary bg-primary-light/60 text-sm uppercase
      text-primary-dark backdrop-blur-2xl dark:border-b-gray-dark-secondary 
      dark:bg-primary-dark/60 dark:text-primary-light lg:h-16 "
      >
        <div className="mx-4 flex w-screen flex-row items-center lg:w-[1024px]">
          {isPhone && (
            <button onClick={() => setShowMenu((previos) => !previos)}>
              <img src="./icons/menu.svg" className="invert dark:invert-0" />
            </button>
          )}
          <Link href="/" className="mx-auto w-24 md:mx-0 md:w-60">
            <img
              className="dark:invert "
              src="/icons/header-logo.svg"
              alt="header logo icon"
            />
          </Link>
          {!isPhone && <Links />}
          <div className="flex flex-row items-center justify-end gap-3 md:w-60">
            {!isPhone && <LanguageSwitch />}
            {!isPhone && <ThemeSwitch />}
            <Button
              onClick={() => push("/contact")}
              className="rounded-lg px-2 py-1 font-medium"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {isPhone && showMenu && (
        <div
          className="fixed top-12 right-0 left-0 z-20 flex flex-col gap-8
        border-b border-b-gray-light-secondary bg-primary-light/60 px-4 pt-8 
        backdrop-blur-2xl dark:border-b-gray-dark-secondary dark:bg-primary-dark/60"
        >
          <Links />
          <div className="flex h-12 flex-row items-center justify-between ">
            <ThemeSwitch />
            <LanguageSwitch />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
