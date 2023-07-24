import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H6: React.FC<ITypographyProps> = ({ children, className }) => {
  return <h6 className={cn("font-PlayfairDisplay", className)}>{children}</h6>;
};

export default H6;
