import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
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
    <div className="page-shell flex min-h-screen flex-col bg-page text-ink">
      <Navbar />

      <Hero />

      <MainLayout
        technologies={technologies}
        stack={stack}
        loading={loading}
        error={error}
        onAdd={handleAddToStack}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />

      <Footer />
    </div>
  );
};

export default App;
