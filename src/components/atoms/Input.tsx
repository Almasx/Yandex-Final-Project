"use client";

import clsx from "clsx";

interface Placeholder extends React.ComponentPropsWithoutRef<"input"> {
  label?: null;
  placeholder: string;
}

interface Label extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  placeholder?: "";
}

interface Icon {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface InputProps {
  value?: string;
  name: string;
  type?: "email" | "password" | "text" | "textarea";
}

type IProps = { className?: string; onChange?: (event?: unknown) => void } & (
  | Placeholder
  | Label
) &
  Icon &
  InputProps;

const Input = ({
  className = "",
  onChange,
  value = "",
  label = null,
  placeholder = " ",
  startIcon = null,
  endIcon = null,
  name,
  type = "text",
}: IProps) => {
  return (
    <div
      className={clsx(
        className,
        "relative",
        (endIcon !== null || startIcon !== null || label !== null) &&
          "flex items-center"
      )}
    >
      {startIcon !== null && (
        <div className="absolute left-5 mr-3 ">{startIcon}</div>
      )}
      {type !== "textarea" ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(event) => {
            onChange && onChange(event);
          }}
          placeholder={placeholder}
          className={clsx(
            "ease peer w-full rounded-[20px] border border-gray-100 dark:bg-dark-bg bg-light-bg p-6 text-xl",
            "dark:text-white text-black duration-300 dark:placeholder:text-white/30 placeholder:text-black/30  dark:focus:border-white dark:border-black focus:outline-none ",
            startIcon !== null && "pl-12"
          )}
        />
      ) : (
        <textarea
          rows={6}
          id={name}
          name={name}
          value={value}
          onChange={(event) => {
            onChange && onChange(event);
          }}
          placeholder={placeholder}
          className={clsx(
            "ease peer w-full rounded-[20px] border border-gray-100 dark:bg-dark-bg bg-light-bg p-6 text-xl",
            "dark:text-white text-black duration-300 dark:placeholder:text-white/30 placeholder:text-black/30 dark:focus:border-white focus:border-black focus:outline-none ",
            startIcon !== null && "pl-12"
          )}
        />
      )}
      {endIcon !== null && <div className="absolute right-5 ">{endIcon}</div>}
      {label !== null && (
        <label
          htmlFor={name}
          className={clsx(
            "peer-placeholder-shown:bg-transparent absolute top-1.5 z-10 origin-[0] -translate-y-4",
            "translate-x-3 transform rounded-full dark:bg-dark-bg bg-light-bg px-1.5 text-xs",
            "dark:text-white/30 text-black/30 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
            " peer-placeholder-shown:translate-x-4 ",
            "peer-placeholder-shown:text-lg ",
            "dark:peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-black/30 peer-focus:top-1.5 peer-focus:-translate-y-4 ",
            "peer-focus:translate-x-3",
            "peer-focus:transform dark:peer-focus:bg-dark-bg peer-focus:bg-light-bg peer-focus:px-1.5",
            "peer-focus:text-sm dark:peer-focus:text-white peer-focus:text-black",
            type === "textarea" &&
              "peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-0"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
