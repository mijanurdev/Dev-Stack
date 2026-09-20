import type { Technology } from "../types";
import TechCard from "./TechCard";

type TechListProps = {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (tech: Technology) => void;
};

const TechList = ({ technologies, stack, onAdd }: TechListProps) => {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} stack={stack} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default TechList;
