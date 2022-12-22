import React from "react";

interface IBadgeProps {
  text: string;
}

const Badge = ({ text }: IBadgeProps) => {
  return (
    <div className="rounded-lg border border-light-gray-200 py-[5px] px-[10px] text-sm font-light text-black/60 dark:border-gray-200 dark:text-white/60">
      {text}
    </div>
  );
};

export default Badge;
