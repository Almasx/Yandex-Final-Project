import { trpc } from "../../../utils/trpc";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProjectsSlider = () => {
  const { data, fetchNextPage, hasNextPage } =
    trpc.projects.getProjects.useInfiniteQuery(
      { limit: 2 },
      { getNextPageParam: (lastProject) => lastProject.nextId }
    );

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
    <InfiniteScroll
      dataLength={projects ? projects.projects.length : 0}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<></>}
      className="col-span-full my-20 grid grid-cols-2 gap-12"
    >
      {projects &&
        projects.projects.map((project) => {
          console.log(project);
          return <ProjectCard key={2} />;
        })}
    </InfiniteScroll>
  );
};

export default ProjectsSlider;
