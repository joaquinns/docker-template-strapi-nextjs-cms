import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  titleSize?: "small" | "medium" | "large";
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  titleSize = "medium",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleSizeClasses = {
    small: "text-2xl md:text-3xl",
    medium: "text-3xl md:text-4xl",
    large: "text-4xl md:text-5xl",
  };

  return (
    <div className={`${alignmentClasses[align]}`}>
      <h2
        className={`font-bold text-[#a86e89] mb-4 ${titleSizeClasses[titleSize]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-xl md:text-2xl text-[#2c2c2c] mb-4">{subtitle}</h3>
      )}
      {description && (
        <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
