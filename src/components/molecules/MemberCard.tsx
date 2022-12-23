import React from "react";

interface IMemberCardProps {
  name: string;
  location: string;
  link_pfp: string;
  link_github: string;
  link_telegram: string;
}

const MemberCard = ({
  name,
  link_pfp,
  link_github,
  link_telegram,
  location,
}: IMemberCardProps) => {
  return (
    <div className="flex grow flex-col rounded-xl border border-gray-100 p-2">
      <div className="relative h-60 grow rounded-xl overflow-hidden flex items-center">
        <img className="w-full rounded-xl" src={link_pfp} alt="author photo" />

        <div className="absolute right-2 top-2 flex items-center justify-center gap-2 rounded-2xl bg-light-bg/80 p-1 opacity-80 dark:bg-dark-bg">
          <a href={link_github}>
            <img className="dark:invert" src="/icons/github.svg" alt="github icon" />
          </a>
          <a href={link_telegram}>
            <img className="dark:invert" src="/icons/telegram.svg" alt="telegram icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-base">
        <div className="flex flex-row justify-between">
          {name}
          <span className="text-black/60 dark:text-white/60">{location}</span>
        </div>
        <p className="text-black dark:text-white">
          {...["React", "Typescript"].map((tech) => tech + ", ")}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
