import React from "react";

const Section = ({ className, bg: Bg, children }) => {
  return (
    <div className={className ? `section ${className}` : "section"}>
      {Bg && <Bg />}
      <div className="container">{children}</div>
    </div>
  );
};

export default Section;
