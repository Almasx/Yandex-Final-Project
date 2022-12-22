import React, { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "../components/atoms/Button";
import ProjectCard from "../components/molecules/ProjectCard";
import { trpc } from "../utils/trpc";

const projects = () => {
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
        <h1 className="text-6xl font-bold text-black dark:text-white">
          Works we proud of
        </h1>
        <span className="mt-5 max-w-[512px] text-center text-xl font-normal text-black opacity-60 dark:text-white">
          Fermentum tellus nec volutpat non enim consequat adcsddipiscing
          euismod. Mi et tortor dolor nec eu
        </span>
        <Button className="mt-4 rounded-lg bg-black font-medium text-white dark:bg-white dark:text-dark-bg">
          I want to work with you 🡥
        </Button>
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
              const { title, description, id, link_github, author, tech } =
                project;
              return (
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  link_github={link_github}
                  author={author.name}
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
