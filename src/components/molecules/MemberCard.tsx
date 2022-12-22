import type { Author, Tech } from "@prisma/client";
import Image from "next/image";
import React from "react";
import Github from "../icons/github";
import Telegram from "../icons/telegram";

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
        <img className="w-full rounded-xl" src={link_pfp} alt={""} />

        <div className="absolute right-2 top-2 flex items-center justify-center gap-2 rounded-2xl bg-light-bg/80 p-1 opacity-80 dark:bg-dark-bg">
          <a href={link_github}>
            <Github />
          </a>
          <a href={link_telegram}>
            <Telegram />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-base">
        <div className="flex flex-row justify-between">
          {name}
          <span className="text-black/60 dark:text-white/60">{location}</span>
        </div>
        <p className="text-black dark:text-white">
          {...["React", "Typesrcipt"].map((tech) => tech + ", ")}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
