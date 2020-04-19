import React from "react";

const CvShiftCard = (props) => {
  let show;

  if (props.value === 0) {
    show = <img src={props.cv.image} alt={props.cv.company} />;
  } else if (props.value === 1) {
    show = (
      <>
        <h3 className="cvheader">{props.cv.company}</h3>
        <div className="title">
          <h4>{props.cv.title}</h4>
        </div>
        <div className="description">
          <h6>{props.cv.description}</h6>
        </div>
      </>
    );
  } else {
    show = (
      <>
        <h3 className="cvheader">{props.cv.company}</h3>
        <div className="tech">
          <h6>
            Env: {props.cv.tech.env}
            <br />
            Tools: {props.cv.tech.tools}
            <br />
          </h6>
        </div>
        <div className="time">{props.cv.time}</div>
      </>
    );
  }
  return (
    // <button className="cvshift" onClick={() => props.onClick()}>
    <button className="cvshift" onClick={() => props.toggle()}>
      {show}
    </button>
  );
};

export default CvShiftCard;

{
  /* <div onClick={this.toggle}>
{ this.state.shown ? <SomeComponent or HTML Tag> : null }
</div> */
}
