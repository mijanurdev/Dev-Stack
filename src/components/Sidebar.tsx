import { FiX } from "react-icons/fi";
import type { Technology } from "../types";

type SidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <aside className="self-start rounded-2xl border border-line bg-white p-5 font-display shadow-sm lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-ink">Your Stack</h2>

      <p className="mt-1 text-xs text-muted">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-lg border border-line bg-surface px-4 py-8 text-center">
          <p className="text-sm text-muted">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg border border-line bg-white p-2"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-ink">
                    {tech.name}
                  </h3>

                  <p className="text-[10px] text-muted">{tech.category}</p>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech.id)}
                  className="cursor-pointer text-muted hover:text-red-500"
                >
                  <FiX size={18} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-8 w-full cursor-pointer rounded-lg border border-red-200 bg-white py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
