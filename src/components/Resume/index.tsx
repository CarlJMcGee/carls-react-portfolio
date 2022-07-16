import * as React from "react";

export interface IResumeProps {}
const resume = require("./assets/Resume-2022.pdf");

export default function Resume(props: IResumeProps) {
  return (
    <div className="block column columns is-centered is-multiline">
      <a
        href={resume}
        download={"CarlJMcGee-Resume"}
        className="column columns is-centered"
      >
        <button className="button column is-one-third p-1">Resume</button>
      </a>
      <ol className="column is-full is-size-5" style={{ listStyle: "inside" }}>
        <li>Experienced in organizing and leading groups of people</li>
        <li>
          Can break down complex ideas and explain them in easy to understand
          terms
        </li>
        <li>Quick to pick up on new ideas and information </li>
        <li>
          Proficient in HTML, CSS, Javascript, JQuery, Express servers via Node
          JS, MySQL using Sequelize, and MongoDB using Mongoose
        </li>
        <li>
          Capable of producing full stack applications using MVP practices
        </li>
      </ol>
    </div>
  );
}
