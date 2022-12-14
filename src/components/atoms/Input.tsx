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
          max={10}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(event) => {
            onChange && onChange(event);
          }}
          placeholder={placeholder}
          className={clsx(
            "ease peer w-full rounded-[20px] border border-gray-light-secondary bg-primary-light p-6 text-xl dark:border-gray-dark dark:bg-primary-dark",
            "text-primary-dark duration-300 placeholder:text-primary-dark/30 focus:border-primary-dark focus:outline-none  dark:text-primary-light dark:placeholder:text-primary-light/30 dark:focus:border-primary-light ",
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
            "ease peer w-full rounded-[20px] border border-gray-light-secondary bg-primary-light p-6 text-xl dark:border-gray-dark dark:bg-primary-dark",
            "text-primary-dark duration-300 placeholder:text-primary-dark/30 focus:border-primary-dark focus:outline-none dark:text-primary-light dark:placeholder:text-primary-light/30 dark:focus:border-primary-light ",
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
            "translate-x-3 transform rounded-full bg-primary-light px-1.5 text-xs dark:bg-primary-dark",
            "text-primary-dark/30 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 dark:text-primary-light/30",
            " peer-placeholder-shown:translate-x-4 ",
            "peer-placeholder-shown:text-lg ",
            "peer-placeholder-shown:text-primary-dark/30 peer-focus:top-1.5 peer-focus:-translate-y-4 dark:peer-placeholder-shown:text-primary-light/30 ",
            "peer-focus:translate-x-3",
            "peer-focus:transform peer-focus:bg-primary-light peer-focus:px-1.5 dark:peer-focus:bg-primary-dark",
            "peer-focus:text-sm peer-focus:text-primary-dark dark:peer-focus:text-primary-light",
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
