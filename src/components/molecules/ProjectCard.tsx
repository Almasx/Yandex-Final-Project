import type { Author, Tech } from "@prisma/client";
import Badge from "../atoms/Badge";

interface IProjectCardProps {
  title: string;
  description: string;
  link_github: string;
  link_image: string;
  author: Author;
  tech_stack: Tech[];
}

const ProjectCard = ({
  title,
  description,
  link_github,
  link_image,
  author,
  tech_stack,
}: IProjectCardProps) => {
  return (
    <div className="relative w-full rounded-md border border-gray-light p-4 dark:border-gray-dark">
      <div className=" h-60 w-full rounded-md bg-primary-dark/60 dark:bg-primary-light/30" />
      <div className="absolute right-16 top-6 flex rounded-xl bg-primary-light py-1 px-3 opacity-80 dark:bg-primary-dark">
        <img
          src={author.link_pfp}
          alt="author photo"
          className="h-6 w-6 rounded-full"
        />
        <span className="ml-2 ">{author.name}</span>
      </div>
      <a
        href={link_github}
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-light p-1 opacity-80 dark:bg-primary-dark"
      >
        <img
          className="dark:invert"
          src="/icons/github.svg"
          alt="github icon"
        />
      </a>
      <div className="mt-4 flex flex-col gap-3 py-1">
        <div className="flex items-center justify-between">
          <span className="text-3xl ">{title}</span>
          <span className="text-primary-dark/30 dark:text-primary-light/30">
            21/11/2022 | Hackathon
          </span>
        </div>
        <div className="flex flex-row gap-2">
          {tech_stack.map((tech) => (
            <Badge key={tech.id} text={tech.title} />
          ))}
        </div>
        <p className="text-primary-dark/60 dark:text-primary-light/60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
