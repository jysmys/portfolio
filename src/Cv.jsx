import React, { Component } from "react";
import CvCard from "./CvCard";
import EduCvCard from "./EduCvCard";
import axios from "axios";

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvs: [],
      edus: [],
      index: 0,
      shown: false,
      eshown: false,
      cardid: Array(15).fill("hide"),
      ecardid: Array(15).fill("hide"),
    };
  }

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        cvs: response.data,
      });
    });
    axios.get("./src/data/education.json").then((eduresponse) => {
      this.setState({
        ecardid: eduresponse.data,
      });
    });
  }

  handleClick(buttonid) {
    const cardid = this.state.cardid.slice();
    cardid[buttonid] = this.state.shown ? "show" : "hide";
    this.setState({ cardid: cardid, shown: !this.state.shown });
  }
  handleClickEdu(buttonid) {
    const ecardid = this.state.ecardid.slice();
    ecardid[buttonid] = this.state.shown ? "show" : "hide";
    this.setState({ ecardid: ecardid, eshown: !this.state.eshown });
  }

  renderButton(buttonid, cv) {
    return (
      <CvCard
        cv={cv}
        value={this.state.cardid[buttonid]}
        onClick={() => this.handleClick(buttonid)}
      />
    );
  }
  renderButtonEdu(buttonid, edu) {
    return (
      <EduCvCard
        edu={edu}
        evalue={this.state.ecardid(buttonid)}
        onclick={() => this.handleClickEdu(buttonid)}
      />
    );
  }

  render() {
    const cvs = this.state.cvs;
    let cvLists;
    const edus = this.state.edus;
    let eduLists;

    if (cvs.length > 0) {
      cvLists = cvs.map((cv) => {
        return (
          <div
            className="cvcard"
            key={cv.id}
            style={{ height: this.state.cardid[cv.id] == "show" && 600 }}
          >
            <div id={"cv-" + cv.id}>{this.renderButton(cv.id, cv)}</div>
          </div>
        );
      });
    }

    // if (edus.length > 0) {
    //   eduLists = edus.map((edu) => {
    //     return (
    //       <div
    //         className="educard"
    //         key={edu.id}
    //         style={{ height: this.state.ecardid[edu.id] == "show" && 400 }}
    //       >
    //         <div id={"edu-" + edu.id}>{this.renderButtonEdu(edu.id, edu)}</div>
    //       </div>
    //     );
    //   });
    // }
    return (
      <div className="ui main container">
        <h2 className="ui header" id="cv-header">
          My CV
        </h2>
        <h3 id="cvheader">Work places</h3>
        <div className="cvLists">{cvLists}</div>
        <h3 id="cvheader">Education</h3>
        {/* <div className="eduLists">Work in progress{eduLists}</div> */}
      </div>
    );
  }
}

export default Cv;
