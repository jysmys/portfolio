import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="column">
        <h2 id="about-header" className="ui header">
          About Me
        </h2>
      </div>
      {/* <div class="ui stackable two column grid"> */}
      <div class="column">
        <UndrawDesignerLife primaryColor="#12283a" height="200px" />
      </div>
      <div id="aboutMe" class="column">
        {/* <p>
          With my years as a front and backend developer I understand every step
          that the consumer takes and how navigation drives sales and
          experience, the end user is my priority. <br />I have the full
          understanding of the whole process and I have long experice in agile
          thinking. My background in the IT business and the interest for new
          techonolgy is something that has been driving me since early -00th .
        </p> */}
        {/* <p>
          <br /> I started my career within Volvo Cars in Belgium and since then
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
          <br />
          Theese insites and deep knowledge on how to run processes for large
          and small business is something I want to share with all my clients.
          For more information about how your company can use my experience,
          contact me. <br />I look forward to share my insight for your success!
          <br />
          <br />
        </p> */}
      </div>
    </div>
    // </div>
  );
};
export default About;
