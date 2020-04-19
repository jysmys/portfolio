import React, { Component } from "react";
// import { UndrawDesignerLife } from "react-undraw-illustrations";

const MeText = (props) => {
  return (
    <button className="mebutton" onClick={() => props.onClick()}>
      <img
        id="me"
        src="./img/me.jpg"
        style={{ display: !props.text && "none" }}
      />
      <div
        id="aboutMeText"
        style={{ display: props.text && "none", width: 600 }}
      >
        <h3>Share my insight for your success!</h3>
        <p>
          {/* With my years as a front and backend developer I understand every step
          that the consumer takes and how navigation drives sales and
          experience, the end user is my priority.  */}
          Her passion is in technology. With her technical background, precision
          and a great curiosity she has a exceptional ability to fast get to
          know new systems and architectures and that is something that has been
          driving her since early -00th.
          <br />
          Jenny has the full understanding of the whole development process and
          has long experice in agile method.
        </p>
        <p>
          As a performance engineer she has worked with a lot of different tools
          at varying of systems and platforms in many complex environments. The
          role in the projects has included test planning, requirement analysis,
          performance testing, optimization and analysis. Jenny has a great
          habit of documenting and presenting test reports in a structured and
          professional manner. Jenny has held lectures about performance test at
          several conferences. Masters to speak English in spoken and written
          terms.
        </p>
        <p>
          {/* I started my career within Volvo Cars in Belgium and since then
          I have hade the great opportunity to be part of developing some of the
          more commercial products in Sweden with companies as
          <br />
          Skandia
          <br />
          Svenska Spel
          <br />
          Trygg Hansa
          <br />
          Doctrin
          <br />
          ICA
          <br />
          Skatteverket
          <br />
          <br /> */}
          Theese insites and deep knowledge on how to run processes for large
          and small IT business is something she want to share with all my
          clients.
          {/* For more information about how your company can use my experience,
          contact me. <br />I look forward to share my insight for your success! */}
          <br />
          <br />
        </p>
      </div>
    </button>
  );
};
class About extends Component {
  state = {
    text: true,
  };
  handleClick() {
    console.log("BAJS");
    this.setState({ text: !this.state.text });
  }

  render() {
    const text = this.state.text;
    return (
      <div className="ui main container">
        <div className="column">
          <h2 id="about-header" className="ui header">
            About Me
          </h2>
        </div>
        <div className="about">
          <div className="aboutme" style={{ height: !this.state.text && 1000 }}>
            <MeText text={this.state.text} onClick={() => this.handleClick()} />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
