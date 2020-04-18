import React from "react";

const CvTech = ({ cv }) => {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <h3 className="ui header">{cv.company}</h3>
          <div className="title">
            <h4>{cv.title}</h4>
          </div>
          <div className="tech">
            Tech: <br />
            {cv.tech}
          </div>
          <div className="time">{cv.time}</div>
        </div>
      </div>
    </>
  );
};
export default CvTech;
