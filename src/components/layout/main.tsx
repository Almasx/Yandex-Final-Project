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
      <main className="dark:text-primary-light-text text-bg-primary-dark relative mx-auto grid w-[1200px] grid-cols-12 gap-5 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
