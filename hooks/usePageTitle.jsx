"use client";
import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  console.log(title);
};

export default usePageTitle;
