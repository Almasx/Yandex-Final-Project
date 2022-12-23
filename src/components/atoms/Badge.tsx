import React from "react";

interface IBadgeProps {
  text: string;
}

const Badge = ({ text }: IBadgeProps) => {
  return (
    <div className="rounded-lg border border-gray-light-secondary py-[5px] px-[10px] text-sm font-light text-primary-dark/60 dark:border-gray-dark-secondary dark:text-primary-light/60">
      {text}
    </div>
  );
};

export default Badge;
