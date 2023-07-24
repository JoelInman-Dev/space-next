import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H3: React.FC<ITypographyProps> = ({ children, className }) => {
  return (
    <h3 className={cn("font-PlayfairDisplay text-2xl", className)}>
      {children}
    </h3>
  );
};

export default H3;
