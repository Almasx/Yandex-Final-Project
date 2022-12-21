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
    <div className="flex gap-4 py-3">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className={clsx(
            "h-[28px] w-[28px] rotate-45 appearance-none rounded-lg border",
            "border-light-gray-200 accent-black duration-300 dark:border-gray-200 dark:accent-white ",
            active && " !bg-light-gray-200/50 dark:!bg-gray-200/50"
          )}
          checked={active}
          onChange={onClick}
        />
        <div
          className={clsx(
            "invisible absolute top-[14px] left-1/2 box-content -translate-x-1/2 -translate-y-1/2 transform",
            active && "!visible"
          )}
        >
          <img src="./icons/Tick.svg" alt="" />
        </div>
      </label>
      <p
        className={clsx(
          "relative text-xl font-light dark:text-white",
          !active && "text-black/30 dark:text-white/30"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default CheckBox;
