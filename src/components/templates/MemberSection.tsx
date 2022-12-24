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
    <div className="relative col-span-full  bg-gradient-to-r from-primary-light via-primary-dark/30 to-primary-light pt-[1px] dark:from-primary-dark dark:via-primary-light/30 dark:to-primary-dark">
      <section className="flex  flex-col gap-16 bg-primary-light py-16 dark:bg-primary-dark">
        {loading && (
          <div className="flex sm:justify-between sm:gap-0 flex-wrap gap-x-44 gap-y-8 sm:flex-row flex-col">
            <div className="lg:h-20 md:h-16 sm:h-12 h-16 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="lg:h-20 md:h-16 sm:h-12 h-16 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="lg:h-20 md:h-16 sm:h-12 h-16 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
            <div className="lg:h-20 md:h-16 sm:h-12 h-16 w-[20%] animate-pulse rounded-xl bg-gray-light-secondary dark:bg-gray-dark-secondary"></div>
          </div>
        )}
        {!loading && members && (
          <div className="flex sm:justify-between sm:gap-0 flex-wrap gap-x-44 gap-y-8 sm:flex-row flex-col">
            {members.map((member) => (
              <div
                className="span lg:text-7xl md:text-6xl sm:text-5xl text-6xl font-bold text-gray-light-secondary dark:text-gray-dark-secondary"
                key={member.id}
              >
                {member.name}
              </div>
            ))}
          </div>
        )}
        <div className="flex sm:w-[500px] w-full flex-col gap-6">
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
          <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-2 grid-cols-1">
            {Array(4).fill(<Mode type="memberCard"></Mode>)}
          </div>
        )}
        {!loading && (
          <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-2 grid-cols-1">
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
