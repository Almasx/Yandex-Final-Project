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
    <div className="border-gray relative w-full rounded-md border p-4">
      <div className=" h-60 w-full rounded-md bg-black/60 dark:bg-white/30" />
      <div className="absolute right-16 top-6 flex rounded-xl bg-light-bg py-1 px-3 opacity-80 dark:bg-dark-bg">
        <img src={author.link_pfp} alt="" className="h-6 w-6 rounded-full" />
        <span className="ml-2 text-black dark:text-white">{author.name}</span>
      </div>
      <a
        href={link_github}
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-light-bg p-1 opacity-80 dark:bg-dark-bg"
      >
        <img className="dark:invert" src="/icons/github.svg" alt="" />
      </a>
      <div className="mt-4 flex flex-col gap-3 py-1">
        <div className="flex items-center justify-between">
          <span className="text-3xl">{title}</span>
          <span className="text-black/30 dark:text-white/30">
            21/11/2022 | Hackathon
          </span>
        </div>
        <div className="flex flex-row gap-2">
          {tech_stack.map((tech) => (
            <Badge key={tech.id} text={tech.title} />
          ))}
        </div>
        <p className="text-black/60 dark:text-white/60">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
