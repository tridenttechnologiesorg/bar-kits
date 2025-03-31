import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TextCardProps {
  title: string;
  category: string;
  className?: string;
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  category,
  className = "",
}) => {
  return (
    <div className={`relative p-6 ${className}`}>
      <div className="flex flex-col gap-2">
        <Badge variant="outline" className="w-fit text-xs px-2 py-0.5">
          {category}
        </Badge>

        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      </div>

      <div className="absolute top-4 right-4 bg-white rounded-full p-2 border">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );
};

export default TextCard;
