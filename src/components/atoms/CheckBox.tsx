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
            "dark:border-gray-200 border-light-gray-200 dark:accent-white accent-black duration-200",
            active && " !bg-primary !border-0"
          )}
          checked={active}
          onChange={onClick}
        />
        <div
          className={clsx(
            "invisible absolute top-3 left-1/2 box-content -translate-x-1/2 -translate-y-1/2 transform",
            active && "!visible"
          )}
        >
          <img src="./icons/Tick.svg" alt="" />
        </div>
      </label>
      <p
        className={clsx(
          "relative text-xl font-light dark:text-white",
          !active && "dark:text-white/30 text-black/30"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default CheckBox;
