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
            " border-gray-light-secondary duration-300 dark:border-gray-dark-secondary ",
            active && " border-gray-light dark:border-primary-light"
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
          <Image src="/icons/Tick.svg" alt="" width={16} height={11} />
        </div>
      </label>
      <p
        className={clsx(
          "relative text-xl font-light dark:text-primary-light",
          !active && "text-primary-dark/30 dark:text-primary-light/30"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default CheckBox;
