import { FiCheck } from "react-icons/fi";
import type { Technology } from "../types";

type TechCardProps = {
  tech: Technology;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
};

const TechCard = ({ tech, stack, onAdd }: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  const badgeColors: Record<string, string> = {
    Popular: "bg-sky-50 text-sky-600",
    Versatile: "bg-emerald-50 text-emerald-600",
    Fast: "bg-orange-50 text-orange-500",
    "Full Stack": "bg-pink-50 text-pink-600",
    "SSR / Edge": "bg-purple-50 text-purple-600",
    Standard: "bg-emerald-50 text-emerald-600",
    "Top SQL": "bg-blue-50 text-blue-600",
    Cache: "bg-red-50 text-red-500",
    Ubiquitous: "bg-amber-50 text-amber-600",
    Essential: "bg-sky-50 text-sky-600",
    Robust: "bg-sky-50 text-sky-600",
    Modern: "bg-cyan-50 text-cyan-600",
    Containers: "bg-sky-50 text-sky-600",
  };

  return (
    <article
      className={`flex h-full min-w-0 flex-col rounded-2xl border p-4 font-display shadow-sm md:p-5 ${
        isAdded ? "border-emerald-200 bg-emerald-50/20" : "border-line bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2 md:gap-3">
        <div className="flex min-w-0 items-center gap-3 lg:block">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9"
          />

          <h3 className="min-w-0 font-display text-base font-bold text-ink md:text-lg lg:mt-5">
            {tech.name}
          </h3>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold md:px-3 md:text-xs ${
            badgeColors[tech.badge] || "bg-surface text-ink"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <p className="mt-3 flex-1 text-xs leading-5 text-copy md:mt-2 md:text-sm md:leading-6">
        {tech.description}
      </p>

      <div className="mt-3 flex items-center justify-between gap-1 border-t border-line pt-2 md:mt-5 md:gap-2 md:pt-3">
        <span className="rounded bg-surface px-2 py-1 text-[10px] text-copy sm:text-[11px]">
          {tech.category}
        </span>

        <span className="text-[10px] text-copy sm:text-[11px]">
          {tech.difficulty}
        </span>

        <span className="whitespace-nowrap text-xs font-semibold text-star">
          ★ {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-sm font-medium text-white hover:bg-ink-hover disabled:cursor-not-allowed disabled:bg-[#F5F8FF] disabled:text-[#8B96A8] md:mt-5 md:py-3"
      >
        {isAdded ? (
          <>
            <FiCheck size={16} />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
};

export default TechCard;
