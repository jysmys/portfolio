import React, { Component } from "react";
import CvShiftCard from "./CvShift";
import axios from "axios";

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvs: [],
      index: 0,
    };
  }

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        cvs: response.data,
      });
    });
  }

  handleClick(i) {
    console.log("handle the Click!");
    let index = this.state.index;
    if (index + 1 === this.state.cvs.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  }

  render(i) {
    const cvs = this.state.cvs;
    let cvLists;

    if (cvs.length > 0) {
      cvLists = cvs.map((cv) => {
        return (
          <div className="ui card" id={"cv-" + cv.id} key={cv.id}>
            <div className="ui card">
              <CvShiftCard
                value={this.state.index}
                cv={cv}
                onClick={() => this.handleClick(i)}
              />
            </div>
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
