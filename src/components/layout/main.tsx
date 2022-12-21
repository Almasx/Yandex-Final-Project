import Navigation from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-100 relative min-h-screen overflow-hidden dark:bg-dark-bg bg-light-bg">
      <Navigation />
      <main className="relative mx-auto grid w-[1200px] grid-cols-12 gap-5 pt-16 dark:text-white-text text-dark-text">
        {children}
      </main>
    </div>
  );
}
