import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H2: React.FC<ITypographyProps> = ({ children, className }) => {
  return (
    <h2 className={cn("font-PlayfairDisplay text-3xl", className)}>
      {children}
    </h2>
  );
};

export default H2;
