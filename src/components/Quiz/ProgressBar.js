import React, { useEffect } from "react";

const ProgressBar = ({ currQues, totalQues }) => {
  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0de",
    margin: 5,
    marginTop: 10,
  };
  const proBar = {
    height: 8,
    width: `${(currQues / totalQues) * 100}%`,
    backgroundColor: "rgb(31 16 227)",
  };
  useEffect(() => {}, [currQues, totalQues]);
  return (
    <>
      <div style={containerStyles}>
        <div style={proBar}></div>
      </div>
    </>
  );
};

export default ProgressBar;
