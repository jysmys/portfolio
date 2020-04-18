import React from "react";

const CvShiftCard = (props) => {
  let show;

  if (props.value === 0) {
    show = <img src={props.cv.image} alt={props.cv.company} />;
  } else if (props.value === 1) {
    show = (
      <div className="content">
        <h3 className="ui header">{props.cv.company}</h3>
        <div className="title">
          <h4>{props.cv.title}</h4>
        </div>
        <div className="description">{props.cv.description}</div>
      </div>
    );
  } else {
    show = (
      <>
        <div className="tech">Tech: {props.cv.tech}</div>
        <div className="time">{props.cv.time}</div>
      </>
    );
  }
  return (
    <button className="square" onClick={() => props.onClick()}>
      {show}
    </button>
  );
};

export default CvShiftCard;
