import React from "react";

const EduCvCard = (props) => {
  
  return (
    <button
      className={props.edu.id}
      onClick={() => props.onClick({ evalue: "show" })}
    >
      <img
        src={props.edu.image}
        style={{
          "&:hover": {
            opacity: 1,
          },
          "&:focus": { opacity: 1 },
        }}
      />
      <div style={{ visibility: props.value == "hide" ? "hidden" : "visible" }}>
        <div className="description">
          <h6>{props.edu.description}</h6>
        </div>
      </div>
    </button>
  );
};
export default EduCvCard;
