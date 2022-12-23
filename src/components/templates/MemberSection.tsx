import type { Author } from "@prisma/client";
import React from "react";
import Mode from "../atoms/Mode";
import MemberCard from "../molecules/MemberCard";

const MemberSection = ({
  members = [],
  loading,
  text,
  headline,
}: {
  members?: Author[];
  loading: boolean;
  text: string;
  headline: string;
}) => {
  return (
    <div className="relative col-span-full bg-gradient-to-r from-white via-black/30 to-white pt-[1px] dark:from-black dark:via-white/30 dark:to-black">
      <section className="flex  flex-col gap-16 bg-light-bg py-16 dark:bg-dark-bg">
        {loading && (
          <div className="flex flex-row justify-between">
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-light-gray-200 dark:bg-gray-200"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-light-gray-200 dark:bg-gray-200"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-light-gray-200 dark:bg-gray-200"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-light-gray-200 dark:bg-gray-200"></div>
          </div>
        )}
        {!loading && members && (
          <div className="flex flex-row justify-between">
            {members.map((member) => (
              <div
                className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200"
                key={member.id}
              >
                {member.name}
              </div>
            ))}
          </div>
        )}
        <div className="flex w-[500px] flex-col gap-6">
          <h3 className="text-4xl font-bold text-black/60 dark:text-white/60">
            {headline.split('b')[0]}
            <span className="text-black dark:text-white">{headline.split('b')[1]}</span> {headline.split('b')[2]}
            <span className="text-black dark:text-white">{headline.split('b')[3]}</span>
          </h3>
          <p className="text-xl text-black dark:text-white">
            {text}
          </p>
        </div>
        {loading && (
          <div className="grid grid-cols-4 gap-6">
            <Mode type="memberCard"></Mode>
            <Mode type="memberCard"></Mode>
            <Mode type="memberCard"></Mode>
            <Mode type="memberCard"></Mode>
          </div>
        )}
        {!loading && (
          <div className="grid grid-cols-4 gap-6">
            {members.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MemberSection;
