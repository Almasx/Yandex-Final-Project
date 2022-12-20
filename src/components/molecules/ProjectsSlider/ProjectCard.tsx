import Badge from "../../atoms/Badge";

const ProjectCard = () => {
  return (
    <div className="border-gray relative h-[480px] w-full rounded-md border p-4">
      <div className="shadow-black-left-top h-[50%] w-full rounded-md dark:bg-white/30 bg-black/60" />
      <div className="absolute right-16 top-6 flex rounded-xl dark:bg-dark-bg bg-light-bg py-1 px-3 opacity-80">
        <img src="./icons/User.png" alt="" />
        <span className="ml-2 dark:text-white text-black">Almas Saparov</span>
      </div>
      <svg className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl dark:bg-dark-bg bg-light-bg p-1 opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"className="dark:fill-white fill-black"/>
      </svg>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center justify-between">
          <span className="text-3xl">Project to show around</span>
          <span className="dark:text-white/30 text-black/30">21/11/2022 | Hackathon</span>
        </div>
        <div className="flex flex-row gap-2">
          {["Next JS", "React", "tRPC", "Tailwind CSS"].map((tech) => (
            <Badge key={tech} />
          ))}
        </div>
        <p className="dark:text-white/60 text-black/60">
          Краткое описание проекта. Lorem ipsum dolor sit amet consectetur.
          Senectus sed velit libero urna sem vivamus senectus penatibus turpis.
          Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut
          consequat tempus ullamcorper vivamus. Amet neque aenean gravida
          maecenas.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
