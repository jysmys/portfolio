import React from "react";

const CvShiftCard = (props) => {
  return (
    <button className={props.id} onClick={() => props.onClick()}>
      {/* {show} */}
      <img src={props.cv.image} alt={props.cv.company} />
      {props.shown && (
        <div>
          <h3 className="cvheader">{props.cv.company}</h3>
          <div className="title">
            <h4>{props.cv.title}</h4>
          </div>
          <div className="description">
            <h6>{props.cv.description}</h6>
          </div>
          {/* <h3 className="cvheader">{props.cv.company}</h3> */}
          <div className="tech">
            <h6>
              Env: {props.cv.tech.env}
              <br />
              Tools: {props.cv.tech.tools}
              <br />
            </h6>
          </div>
          <div className="time">{props.cv.time}</div>
        </div>
      )}
    </button>
    
  );
};

export default CvShiftCard;
