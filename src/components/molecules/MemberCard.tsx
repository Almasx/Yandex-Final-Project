import React from "react";
import Github from "../icons/github";
import Telegram from "../icons/telegram";

const MemberCard = () => {
  return (
    <div className="flex grow flex-col rounded-xl border border-gray-100 p-2">
      <div className="relative h-72 grow rounded-xl dark:bg-light-bg bg-black/30">
        <div className="absolute right-2 top-2 flex items-center justify-center gap-2 rounded-2xl bg-light-bg/80 dark:bg-dark-bg p-1 opacity-80">
          <Telegram/>
          <Github/>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-base">
        <div className="flex flex-row justify-between ">
          Almas Saparov
          <span className="dark:text-white/60 text-black/60">Uralsk, KZ</span>
        </div>
        <p className="dark:text-white text-black">HTML, CSS, JavaScript, React</p>
      </div>
    </div>
  );
};

export default MemberCard;
