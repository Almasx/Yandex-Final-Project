import Badge from "../../atoms/Badge";

const ProjectCard = () => {
  return (
    <div className="border-gray relative h-[480px] w-full rounded-md border p-4">
      <div className="shadow-black-left-top h-[50%] w-full rounded-md bg-white/30" />
      <div className="absolute right-16 top-6 flex rounded-xl bg-dark-bg py-1 px-3 opacity-80">
        <img src="./icons/User.png" alt="" />
        <span className="ml-2 text-white">Almas Saparov</span>
      </div>
      <img
        src="./icons/github.svg"
        alt=""
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-dark-bg p-1 opacity-80"
      />
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center justify-between">
          <span className="text-3xl">Project to show around</span>
          <span className="text-white/30">21/11/2022 | Hackathon</span>
        </div>
        <div className="flex flex-row gap-2">
          {["Next JS", "React", "tRPC", "Tailwind CSS"].map((tech) => (
            <Badge key={tech} />
          ))}
        </div>
        <p className="text-white/60">
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
