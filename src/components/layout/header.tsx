import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      className="fixed z-20 flex h-16 w-full items-center justify-center border-b border-b-light-gray-200 bg-white/60 text-sm
    uppercase text-black backdrop-blur-2xl dark:border-b-gray-200 dark:bg-black/60 dark:text-white "
    >
      <div className="flex w-[1200px] flex-row items-center justify-between">
        <img src="./Logo.svg" alt="" />
        <div className="flex flex-row gap-5 font-light capitalize text-black/30 dark:text-white/30 ">
          <Link
            href="/"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="duration-200 hover:text-black dark:hover:text-white"
          >
            Team
          </Link>
        </div>
        <Link href="/contact" className="w-32">
          <button className="font-medium">Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
