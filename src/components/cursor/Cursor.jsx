import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      showSystemCursor
      outerSize={35}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: "exclusion",
        backgroundColor: "white",
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
        "button",
        ".link",
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "span",
        "img",
      ]}
    />
  );
};

export default Cursor;
