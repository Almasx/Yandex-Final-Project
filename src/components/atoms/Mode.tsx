"use client";
import React from "react";
import Github from "../icons/github";
import Telegram from "../icons/telegram";

export interface IButtonProps {
  condition?: "loading" | "loaded";
  type?: "projectCard" | "memberCard";
}

const Mode = ({
  type = "projectCard",
  condition = "loading",
}: IButtonProps) => {
  if (type === "projectCard") {
    if (condition === "loading") {
      return (
        <div className="border-gray relative w-full rounded-md border p-4">
          <div className=" h-60 w-full animate-pulse rounded-md bg-primary-dark/60 dark:bg-primary-light/30" />
          <div className="absolute right-16 top-6 flex rounded-xl bg-primary-light py-1 px-3 opacity-80 dark:bg-primary-dark">
            <svg
              className="dark:text-gray-700 h-6 w-6 animate-pulse text-gray-dark-secondary"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="ml-2 h-6 w-16 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light  dark:text-primary-light"></span>
          </div>
          <a
            href="#"
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-light p-1 opacity-80 dark:bg-primary-dark"
          >
            <Github />
          </a>
          <div className="mt-4 flex flex-col gap-3 py-1">
            <div className="items`-center flex justify-between">
              <span className="h-8 w-28 animate-pulse rounded-full bg-gray-dark text-3xl dark:bg-gray-light"></span>
              <span className="h-6 w-60 animate-pulse rounded-full bg-gray-dark text-primary-dark/30 dark:bg-gray-light dark:text-primary-light/30"></span>
            </div>
            <div className="flex animate-pulse flex-row gap-2">
              <div className="flex h-8 w-24 items-center rounded-lg border border-gray-light-secondary py-[5px] px-[10px] dark:border-gray-dark-secondary">
                <div className="h-4 w-full rounded-full bg-gray-dark dark:bg-gray-light"></div>
              </div>
              <div className="flex h-8 w-24 items-center rounded-lg border border-gray-light-secondary py-[5px] px-[10px] dark:border-gray-dark-secondary">
                <div className="h-4 w-full rounded-full bg-gray-dark dark:bg-gray-light"></div>
              </div>
              <div className="flex h-8 w-24 items-center rounded-lg border border-gray-light-secondary py-[5px] px-[10px] dark:border-gray-dark-secondary">
                <div className="h-4 w-full rounded-full bg-gray-dark dark:bg-gray-light"></div>
              </div>
              <div className="flex h-8 w-24 items-center rounded-lg border border-gray-light-secondary py-[5px] px-[10px] dark:border-gray-dark-secondary">
                <div className="h-4 w-full rounded-full bg-gray-dark dark:bg-gray-light"></div>
              </div>
            </div>
            <p className="h-4 w-full animate-pulse rounded-full bg-gray-dark text-primary-dark/60 dark:bg-gray-light dark:text-primary-light/60"></p>
            <p className="h-4 w-full animate-pulse rounded-full bg-gray-dark text-primary-dark/60 dark:bg-gray-light dark:text-primary-light/60"></p>
            <p className="h-4 w-[50%] animate-pulse rounded-full bg-gray-dark text-primary-dark/60 dark:bg-gray-light dark:text-primary-light/60"></p>
          </div>
        </div>
      );
    }
  } else if (type === "memberCard") {
    if (condition === "loading") {
      return (
        <div className="flex grow flex-col rounded-xl border border-gray-dark p-2">
          <div className="relative flex h-60 grow items-center overflow-hidden rounded-xl">
            <div className="h-full w-full animate-pulse rounded-xl bg-primary-dark/60 dark:bg-primary-light/30" />
            <div className="absolute right-2 top-2 flex items-center justify-center gap-2 rounded-2xl bg-primary-light/80 p-1 opacity-80 dark:bg-primary-dark">
              <a href="#">
                <Github />
              </a>
              <a href="#">
                <Telegram />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-3 text-base">
            <div className="flex flex-row justify-between">
              <span className="h-4 w-16 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light"></span>
              <span className="h-4 w-24 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light"></span>
            </div>
            <div className="flex h-4 w-full ">
              <span className="mr-4 h-4 w-16 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light"></span>
              <span className="mr-4 h-4 w-24 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light"></span>
              <span className="h-4 w-8 animate-pulse rounded-full bg-gray-dark dark:bg-gray-light"></span>
            </div>
          </div>
        </div>
      );
    }
  }
  return null;
};

export default Mode;
