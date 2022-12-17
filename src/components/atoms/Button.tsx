"use client";
import clsx from "clsx";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";

export interface IButtonProps {
  variant?: "primary" | "secondary" | "text";
  type?: "button" | "submit" | "reset";
  ripple?: boolean;
  children: ReactNode;
  onClick?: (event?: any) => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  ripple = true,
  className = "",
  disabled = false,
}: IButtonProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState<boolean>(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      type={type}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        const { left, top } = event.currentTarget.getBoundingClientRect();
        setCoords({ x: event.clientX - left, y: event.clientY - top });
        onClick && onClick(event);
      }}
      disabled={disabled}
      className={clsx(
        "flex flex-row items-center justify-center",
        "relative overflow-hidden", // others
        "box-content px-3 py-2", // text
        className,
        [
          variant === "primary" && [
            "dark:bg-white", // background
            "dark:text-black ", // typography
          ],
          variant === "secondary" && [
            "border-stroke-200 border", // box model
            "bg-transparent hover:bg-surface/5", // background
          ],
          variant === "text" && [
            "bg-transparent hover:bg-surface/5", // background
            "text-primary ", // typography
          ],
        ],
        disabled && "disabled: cursor-not-allowed"
      )}
    >
      {isRippling && (
        <span
          className={clsx(
            "animate-ripple-effect absolute block h-5 w-5 rounded-full bg-white/20 opacity-100",
            !ripple && "hidden"
          )}
          style={{ left: coords.x, top: coords.y }}
        />
      )}
      <span className="relative z-10 ">{children}</span>
    </button>
  );
};

export default Button;
