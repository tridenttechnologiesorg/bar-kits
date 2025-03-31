import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryHeaderProps {
  title: string;
  showLink?: boolean;
  linkText?: string;
  linkUrl?: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  showLink = false,
  linkText = "See all posts",
  linkUrl = "#",
}) => {
  return (
    <div className="flex justify-between items-baseline mb-8">
      <h1 className="text-4xl md:text-6xl font-bold italic">{title}</h1>

      {showLink && (
        <Link href={linkUrl} className="flex items-center text-sm">
          {linkText} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default CategoryHeader;
