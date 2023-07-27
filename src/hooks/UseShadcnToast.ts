"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

function useShadcnToast() {
  const { toast } = useToast();
  const [toastContent, setToastContent] = useState({
    title: "Fatal Error",
    description: "Please try again later something went very wrong!!!",
  });

  const showToast = (content = toastContent) => {
    toast(content);
  };

  return { showToast, setToastContent };
}

export default useShadcnToast;
