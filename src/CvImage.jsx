import React from "react";

const CvImage = ({ cv }) => {
  const imageClick = () => {
    console.log("Bajs");
  };
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={cv.image} alt={cv.company} onClick={() => imageClick()} />
        </div>
      </div>
    </>
  );
};
export default CvImage;
