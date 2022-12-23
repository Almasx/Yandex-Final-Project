import React, { useMemo } from "react";
import { trpc } from "../utils/trpc";

import InfiniteScroll from "react-infinite-scroll-component";
import Button from "../components/atoms/Button";
import Mode from "../components/atoms/Mode";
import ProjectCard from "../components/molecules/ProjectCard";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["projects"], nextI18nConfig, [
      "en",
      "ru",
    ])),
  },
});

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation("projects");
  const { data, fetchNextPage, hasNextPage } =
    trpc.projects.getProjects.useInfiniteQuery(
      { limit: 2 },
      { getNextPageParam: (lastProject) => lastProject.nextId }
    );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const projects = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          nextId: page.nextId,
          projects: [...prev.projects, ...page.projects],
        };
      }),
    [data]
  );

  return (
    <>
      <div className="col-span-6 col-start-4 mt-20 flex flex-col items-center">
        <h1 className="dark:text-primary-light text-primary-dark text-center text-6xl font-bold">
          {t`headline`}
        </h1>
        <p className="dark:text-primary-light text-primary-dark mt-1 max-w-[512px] text-center text-xl font-normal opacity-60">
          {t`text`}
        </p>
        <Button className="mt-4 rounded-lg  font-medium">{t`cta`}</Button>
      </div>
      <div className="col-span-full">
        <InfiniteScroll
          dataLength={projects ? projects.projects.length : 0}
          next={() => {
            console.log("lol", hasNextPage);
            fetchNextPage();
          }}
          hasMore={!!hasNextPage}
          loader={<></>}
          className="my-20 grid grid-cols-2 gap-12"
        >
          {projects &&
            projects.projects.map((project) => {
              const {
                title,
                description,
                id,
                link_github,
                author,
                tech,
                link_image,
              } = project;
              return (
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  link_github={link_github}
                  link_image={link_image}
                  author={author}
                  tech_stack={tech}
                />
              );
            })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default projects;
