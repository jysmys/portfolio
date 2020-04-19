import React from "react";

const CvCard = (props) => {
  
  return (
    <button
      className={props.cv.id}
      onClick={() => props.onClick({ value: "show" })}
    >
      <img
        src={props.cv.image}
        alt={props.cv.company}
        style={{
          "&:hover": {
            opacity: 1,
          },
          "&:focus": { opacity: 1 },
        }}
        // style={ props.value == "show" ? styleActive : styleInactive }
      />
      <div style={{ visibility: props.value == "hide" ? "hidden" : "visible" }}>
        <div className="title">
          <h4>{props.cv.title}</h4>
        </div>
        <div className="description">
          <h6>{props.cv.description}</h6>
        </div>
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
    </button>
  );
};
export default CvCard;
