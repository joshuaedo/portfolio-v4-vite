import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  const [isMouseMoved, setIsMouseMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {isMouseMoved && (
        <AnimatedCursor
          showSystemCursor
          outerSize={8}
          outerScale={0.5}
          outerAlpha={0}
          outerStyle={{
            backgroundColor: "purple",
          }}
          innerStyle={{
            display: "none",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            ".link",
          ]}
        />
      )}
    </>
  );
};

export default Cursor;
