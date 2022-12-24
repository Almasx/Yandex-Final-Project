import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LanguageSwitch = () => {
  const { locale, asPath } = useRouter();
  return (
    <>
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
    </>
  );
};

export default LanguageSwitch;
