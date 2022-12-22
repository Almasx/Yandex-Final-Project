"use client";
import clsx from "clsx";
import type { ReactNode } from "react";
import React from "react";
import Github from "../icons/github";
import ProjectCard from "../molecules/ProjectCard";
import Badge from "./Badge";

export interface IButtonProps {
  condition?: "loading" | "loaded";
  type?: "projectCard";
  children: ReactNode;
  className?: string;
}

const Mode = ({
  type = "projectCard",
  condition = "loading",
}: IButtonProps) => {
  if (type === 'projectCard'){
    if(condition === "loading"){
      return (
        <div className="border-gray relative w-full rounded-md border p-4">
          <div className=" h-60 w-full rounded-md bg-black/60 dark:bg-white/30 animate-pulse" />
          <div className="absolute right-16 top-6 flex rounded-xl bg-light-bg py-1 px-3 opacity-80 dark:bg-dark-bg">
            <svg className="w-6 h-6 text-gray-200 dark:text-gray-700 animate-pulse" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
            <span className="ml-2 dark:text-white rounded-full h-6 w-16 dark:bg-light-gray-100 bg-gray-100  animate-pulse"></span>
          </div>
          <a
            href="#"
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-light-bg p-1 opacity-80 dark:bg-dark-bg"
          >
            <Github/>
          </a>
          <div className="mt-4 flex flex-col gap-3 py-1">
            <div className="flex items`-center justify-between">
              <span className="text-3xl animate-pulse rounded-full h-8 w-28 bg-gray-100 dark:bg-light-gray-100"></span>
              <span className="text-black/30 dark:text-white/30 animate-pulse rounded-full h-6 w-60 bg-gray-100 dark:bg-light-gray-100">
              </span>
            </div>
            <div className="flex flex-row gap-2 animate-pulse">
              <div className="rounded-lg border border-light-gray-200 h-8 w-24 flex items-center py-[5px] px-[10px] dark:border-gray-200">
                <div className="rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></div> 
              </div>
              <div className="rounded-lg border border-light-gray-200 h-8 w-24 flex items-center py-[5px] px-[10px] dark:border-gray-200">
                <div className="rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></div> 
              </div>
              <div className="rounded-lg border border-light-gray-200 h-8 w-24 flex items-center py-[5px] px-[10px] dark:border-gray-200">
                <div className="rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></div> 
              </div>
              <div className="rounded-lg border border-light-gray-200 h-8 w-24 flex items-center py-[5px] px-[10px] dark:border-gray-200">
                <div className="rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></div> 
              </div>
            </div>
            <p className="text-black/60 dark:text-white/60 animate-pulse rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></p>
            <p className="text-black/60 dark:text-white/60 animate-pulse rounded-full h-4 w-full bg-gray-100 dark:bg-light-gray-100"></p>
            <p className="text-black/60 dark:text-white/60 animate-pulse rounded-full h-4 w-[50%] bg-gray-100 dark:bg-light-gray-100"></p>
          </div>
        </div>
      );
    }
  }
};

export default Mode;
