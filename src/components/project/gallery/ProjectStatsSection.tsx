import React from "react";

interface StatItem {
  value: string;
  label: string;
}

interface ProjectStatsSectionProps {
  stats: StatItem[];
  columns?: number;
  className?: string;
}

const ProjectStatsSection: React.FC<ProjectStatsSectionProps> = ({
  stats,
  columns = 4,
  className = "",
}) => {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    7: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7",
  }[columns] || "grid-cols-2 sm:grid-cols-4";

  return (
    <div className={`bg-black py-12 px-4 mb-8 ${className}`}>
      <div className={`grid ${gridCols} gap-6 max-w-6xl mx-auto`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center border-l border-white/20 first:border-l-0 px-4"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-white/80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatsSection;
