// HorizontalLine.js
import React from "react";

const HorizontalLine = ({ width = "w-1/2", additionalClasses = "" }) => {
  return (
    <>
      <hr
        className={`border-t mx-auto border-gray-800 mt-4 ${width} ${additionalClasses}`}
      />
    </>
  );
};

export default HorizontalLine;
