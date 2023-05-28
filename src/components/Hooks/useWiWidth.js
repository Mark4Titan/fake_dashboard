import { useEffect, useState } from "react";

const useWiWidth = (size) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onChange);

    return () => {
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return {
    windowSize: width,
    widthIn: size === undefined ? false : size && width <= size,
  };
};
export default useWiWidth;