import React from "react";

const Heading = ({ heading, subHeading, styleHeading, color, ...props}) => {
  // destructuring props

  const headings = {
    color: color,
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "20px",
    borderRadius: "1px solid black",
    backgroundColor: props.backgroundColor,
  };

  return (
    <>
      <h3 className="bold-font">{heading}</h3>
      <p style={headings}>{subHeading} </p>
      <p style={headings}>{styleHeading}</p>
    </>
  );
};

export default Heading;
