import React from "react";

interface BentoItem {
  src: string;
  alt?: string;
  span?: "small" | "medium" | "large" | "wide" | "tall";
  type?: "image" | "video";
  poster?: string;
  name?: string;
  position?: "top" | "center" | "bottom";
}

interface ProjectBentoGridProps {
  items: BentoItem[];
  className?: string;
}

const VideoCell: React.FC<{ item: BentoItem }> = ({ item }) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={item.src}
        poster={item.poster}
        className="w-full h-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
      />
      {item.name && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <span className="text-white text-sm font-medium">{item.name}</span>
        </div>
      )}
    </div>
  );
};

const ProjectBentoGrid: React.FC<ProjectBentoGridProps> = ({ items, className = "" }) => {
  const getSpanClasses = (span?: string) => {
    switch (span) {
      case "large":
        return "col-span-2 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "medium":
      case "small":
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getPositionClass = (position?: string) => {
    switch (position) {
      case "top": return "object-top";
      case "bottom": return "object-bottom";
      default: return "object-top";
    }
  };

  return (
    <div 
      className={`grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px] ${className}`}
      style={{ gridAutoFlow: "dense" }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${getSpanClasses(item.span)} overflow-hidden rounded-lg group cursor-pointer relative`}
        >
          {item.type === "video" ? (
            <VideoCell item={item} />
          ) : (
            <>
              <img
                src={item.src}
                alt={item.alt || `Image ${index + 1}`}
                className={`w-full h-full object-cover ${getPositionClass(item.position)} transition-transform duration-500 group-hover:scale-105`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectBentoGrid;
