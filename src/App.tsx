import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import type { Technology } from "./types";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`);

        if (!response.ok) {
          throw new Error("Failed to load data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch {
        setError("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAdded = stack.some((item) => item.id === tech.id);

    if (isAdded) {
      toast.warning("Technology already added!");
      return;
    }

    setStack([...stack, tech]);

    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const remainingStack = stack.filter((item) => item.id !== id);

    setStack(remainingStack);

    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Navbar />

      <Hero />

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
              <TechList
                technologies={technologies}
                stack={stack}
                onAdd={handleAddToStack}
              />
            )}
          </div>

          <Sidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
