import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H4: React.FC<ITypographyProps> = ({ children, className }) => {
  return (
    <h4 className={cn("font-PlayfairDisplay text-xl", className)}>
      {children}
    </h4>
  );
};

export default H4;
