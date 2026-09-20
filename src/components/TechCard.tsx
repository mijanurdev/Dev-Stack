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
      className={`flex h-full min-w-0 flex-col rounded-2xl border p-5 font-display shadow-sm ${
        isAdded ? "border-emerald-200 bg-emerald-50/20" : "border-line bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-9 w-9 object-contain"
        />

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[tech.badge] || "bg-surface text-ink"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink">{tech.name}</h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-copy">
        {tech.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-line pt-3">
        <span className="rounded bg-surface px-2 py-1 text-[11px] text-copy">
          {tech.category}
        </span>

        <span className="text-[11px] text-copy">{tech.difficulty}</span>

        <span className="whitespace-nowrap text-xs font-semibold text-star">
          ★ {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-3 py-3 text-sm font-medium text-white hover:bg-ink-hover disabled:cursor-not-allowed disabled:bg-[#F5F8FF] disabled:text-[#8B96A8]"
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
