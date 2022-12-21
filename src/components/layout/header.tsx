import Image from "next/image";

const Navigation = () => {
  return (
    <nav
      className="fixed z-20 flex h-16 w-full items-center justify-center border-b
     border-b-gray-200 bg-black/60 text-sm uppercase text-white backdrop-blur-2xl "
    >
      <div className="flex w-[1200px] flex-row items-center justify-between">
        <Image
          src="/Logo.svg"
          width={128}
          height={24}
          alt="Picture of the author"
        />
        <div className="flex flex-row gap-5 font-light capitalize text-white/30 ">
          <a href="/" className="duration-200 hover:text-white">
            Home
          </a>
          <a href="/projects" className="duration-200 hover:text-white">
            Projects
          </a>
          <a href="/team" className="duration-200 hover:text-white">
            Team
          </a>
        </div>
        <a href="/contact" className="w-32">
          <button className="font-medium">Contact</button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
