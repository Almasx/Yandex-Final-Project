import Navigation from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-100 relative min-h-screen overflow-hidden bg-light-bg dark:bg-dark-bg">
      <Navigation />
      <main className="relative mx-auto grid w-[1200px] grid-cols-12 gap-5 pt-16 text-dark-text dark:text-white-text">
        {children}
      </main>
    </div>
  );
}
