import Navigation from "./Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-100 relative min-h-screen overflow-hidden bg-dark-bg ">
      <Navigation />
      <main className="relative mx-auto grid w-[1200px] grid-cols-12 gap-5 pt-16 dark:text-white-text">
        {children}
      </main>
    </div>
  );
}
