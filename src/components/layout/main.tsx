import Footer from "./footer";
import Navigation from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-100 relative min-h-screen overflow-hidden bg-primary-light dark:bg-primary-dark">
      <Navigation />
      <main
        className="dark:text-primary-light-text text-bg-primary-dark relative mx-auto grid w-full
       grid-cols-4  gap-5 py-16 px-4 text-primary-dark dark:text-primary-light md:grid-cols-8 lg:w-[1024px] lg:grid-cols-12 lg:px-0"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
