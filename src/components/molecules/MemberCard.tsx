import React from "react";

const MemberCard = () => {
  return (
    <div className="flex grow flex-col rounded-xl border border-gray-100 p-2">
      <div className="relative h-72 grow rounded-xl bg-white/30">
        <div className="absolute right-2 top-2 flex items-center justify-center gap-2 rounded-2xl bg-dark-bg p-1 opacity-80">
          <img src="./icons/telegram.svg" alt="" className="" />
          <img src="./icons/github.svg" alt="" className="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-base">
        <div className="flex flex-row justify-between ">
          Almas Saparov
          <span className="text-white/60">Uralsk, KZ</span>
        </div>
        <p className="text-white">HTML, CSS, JavaScript, React</p>
      </div>
    </div>
  );
};

export default MemberCard;
