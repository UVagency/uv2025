
import { ArrowDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-text/70 animate-bounce">
      <span className="text-sm mb-1">Scroll Down</span>
      <ArrowDown size={16} />
    </div>
  );
};
