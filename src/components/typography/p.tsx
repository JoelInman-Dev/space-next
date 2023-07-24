import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const P: React.FC<ITypographyProps> = ({ children, className }) => {
  return <p className={cn("font-Jost", className)}>{children}</p>;
};

export default P;
