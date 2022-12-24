import Image from "next/image";
import clsx from "clsx";
import type { ReactNode } from "react";

interface CheckBoxProps {
  children: ReactNode;
  active: boolean;
  onClick?: (event?: unknown) => void;
}

const CheckBox = ({ children, active, onClick }: CheckBoxProps) => {
  return (
    <div className="flex gap-4 py-3 ">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className={clsx(
            "h-[28px] w-[28px] rotate-45 appearance-none rounded-lg border",
            " border-gray-light-secondary  dark:border-gray-dark-secondary ",
            active && " border-gray-light dark:border-gray-dark"
          )}
          checked={active}
          onChange={onClick}
        />
        <div
          className={clsx(
            "absolute top-[14px] left-1/2 box-content -translate-x-1/2 -translate-y-1/2 transform opacity-0 duration-300",
            active && "!opacity-100"
          )}
        >
          <Image
            src="/icons/Tick.svg"
            alt=""
            className="invert dark:invert-0"
            width={16}
            height={11}
          />
        </div>
      </label>
      <p
        className={clsx(
          "relative text-xl font-light duration-300 dark:text-primary-light",
          !active && "text-primary-dark/30 dark:text-primary-light/30 "
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default CheckBox;
