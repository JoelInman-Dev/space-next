import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H1: React.FC<ITypographyProps> = ({ children, className }) => {
  return (
    <h1 className={cn("font-PlayfairDisplay text-4xl", className)}>
      {children}
    </h1>
  );
};

export default H1;
