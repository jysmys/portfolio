import React from "react";

const CvDesc = ({ cv }) => {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <h3 className="ui header">{cv.company}</h3>
          <div className="title">
            <h4>{cv.title}</h4>
          </div>
          <div className="description">{cv.description}</div>
        </div>
      </div>
    </>
  );
};
export default CvDesc;
