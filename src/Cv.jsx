import React, { Component } from "react";
import CvCard from "./CvCard";
import axios from "axios";

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvs: [],
      index: 0,
      shown: false,
      cardid: Array(15).fill("hide"),
    };
  }

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        cvs: response.data,
      });
    });
  }

  handleClick(buttonid) {
    const cardid = this.state.cardid.slice();
    cardid[buttonid] = this.state.shown ? "show" : "hide";
    this.setState({ cardid: cardid, shown: !this.state.shown });
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

  render() {
    const cvs = this.state.cvs;
    let cvLists;

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
    return (
      <div className="ui main container">
        <h2 className="ui header" id="cv-header">
          My CV
        </h2>
        <div className="cvLists">{cvLists}</div>
      </div>
    );
  }
}

export default Cv;
