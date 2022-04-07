import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  let width;
  let height;

  if (typeof window !== `undefined`) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
