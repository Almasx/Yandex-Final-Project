import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Links = () => {
  const { pathname } = useRouter();
  return (
    <div
      className="flex flex-col justify-center gap-1 text-2xl font-light capitalize text-primary-dark/30
    dark:text-primary-light/30 sm:mx-auto sm:flex-row sm:items-center sm:gap-5 sm:text-base
    "
    >
      <Link
        href="/"
        className={clsx(
          "duration-200 hover:text-primary-dark dark:hover:text-primary-light",
          pathname.endsWith("/") && "text-primary-dark dark:text-primary-light"
        )}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={clsx(
          "duration-200 hover:text-primary-dark dark:hover:text-primary-light",
          pathname.endsWith("/projects") &&
            "text-primary-dark dark:text-primary-light"
        )}
      >
        Projects
      </Link>
      <Link
        href="/team"
        className={clsx(
          "duration-200 hover:text-primary-dark dark:hover:text-primary-light",
          pathname.endsWith("/team") &&
            "text-primary-dark dark:text-primary-light"
        )}
      >
        Team
      </Link>
    </div>
  );
};

export default Links;
