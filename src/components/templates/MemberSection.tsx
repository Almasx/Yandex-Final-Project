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
    <div className="from-white via-black/30 to-white dark:from-black dark:via-white/30 dark:to-black relative col-span-full bg-gradient-to-r pt-[1px]">
      <section className="flex  flex-col gap-16 bg-primary-light py-16 dark:bg-primary-dark">
        {loading && (
          <div className="flex flex-row justify-between">
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="h-24 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
          </div>
        )}
        {!loading && members && (
          <div className="flex flex-row justify-between">
            {members.map((member) => (
              <div
                className="span text-8xl font-bold text-gray-light-secondary dark:text-gray-dark-secondary"
                key={member.id}
              >
                {member.name}
              </div>
            ))}
          </div>
        )}
        <div className="flex w-[500px] flex-col gap-6">
          <h3 className="text-4xl font-bold text-primary-dark/60 dark:text-primary-light/60">
            {headline.split("b")[0]}
            <span className="text-primary-dark dark:text-primary-light">
              {headline.split("b")[1]}
            </span>{" "}
            {headline.split("b")[2]}
            <span className="text-primary-dark dark:text-primary-light">
              {headline.split("b")[3]}
            </span>
          </h3>
          <p className="text-xl text-primary-dark dark:text-primary-light">
            {text}
          </p>
        </div>
        {loading && (
          <div className="grid grid-cols-4 gap-6">
            {Array(4).fill(<Mode type="memberCard"></Mode>)}
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
