import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  error: string;
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const MainLayout = ({
  technologies,
  stack,
  loading,
  error,
  onAdd,
  onRemove,
  onRemoveAll,
}: MainLayoutProps) => {
  return (
    <main id="technologies" className="site-container flex-1 py-10 md:py-16">
      <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl md:text-left">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>

      <p className="mt-2 text-center text-sm text-copy md:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-5 grid items-start gap-6 md:mt-8 lg:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)]">
        <div className="min-w-0">
          {loading ? (
            <div className="flex items-center gap-3 py-10">
              <span className="loading loading-spinner text-brand-pink"></span>
              <p>Loading technologies...</p>
            </div>
          ) : error ? (
            <p className="py-10 text-danger">{error}</p>
          ) : (
            <TechList technologies={technologies} stack={stack} onAdd={onAdd} />
          )}
        </div>

        <Sidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </main>
  );
};

export default MainLayout;
