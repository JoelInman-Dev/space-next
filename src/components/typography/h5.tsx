import React from "react";
import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/interfaces/ITypography";

const H5: React.FC<ITypographyProps> = ({ children, className }) => {
  return <h5 className={cn("font-PlayfairDisplay", className)}>{children}</h5>;
};

export default H5;
