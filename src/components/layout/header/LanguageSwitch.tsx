import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LanguageSwitch = () => {
  const { locale, asPath } = useRouter();
  return (
    <div className="flex flex-row items-center justify-end gap-3">
      <Link
        className={clsx(locale === "en" && "underline")}
        href={asPath}
        locale="en"
      >
        EN
      </Link>
      <Link
        className={clsx(locale === "ru" && "underline")}
        href={asPath}
        locale="ru"
      >
        RU
      </Link>
    </div>
  );
};

export default LanguageSwitch;
