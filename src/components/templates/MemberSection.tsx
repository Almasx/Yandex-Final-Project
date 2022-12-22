import type { Author } from "@prisma/client";
import React from "react";
import MemberCard from "../molecules/MemberCard";

const MemberSection = ({ members = [] }: { members?: Author[] }) => {
  return (
    <div className="relative col-span-full bg-gradient-to-r from-white via-black/30 to-white pt-[1px] dark:from-black dark:via-white/30 dark:to-black">
      <section className="flex  flex-col gap-16 bg-light-bg py-16 dark:bg-dark-bg">
        <div className="flex flex-row justify-between">
          {members &&
            members.map((member) => (
              <div
                className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200"
                key={member.id}
              >
                {member.name}
              </div>
            ))}
        </div>
        <div className="flex w-[500px] flex-col gap-6">
          <h3 className="text-4xl font-bold text-black/60 dark:text-white/60">
            We are team of{" "}
            <span className="text-black dark:text-white">2 engineers</span> and
            <span className="text-black dark:text-white"> 2 designers</span>
          </h3>
          <p className="text-xl text-black dark:text-white">
            Fermentum tellus nec volutpat non enim consequat adcsddipiscing
            euismod. Mi et tortor dolor nec eu rtor dolor nec eur tor dolor nec
            eu
          </p>
        </div>
        <div className="grid grid-cols-4  gap-6">
          {members &&
            members.map((member) => <MemberCard key={member.id} {...member} />)}
        </div>
      </section>
    </div>
  );
};

export default MemberSection;
