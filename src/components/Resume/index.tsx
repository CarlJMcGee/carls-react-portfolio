import * as React from "react";

export interface IResumeProps {}
const resume = require("./assets/Resume-2022.pdf");

export default function Resume(props: IResumeProps) {
  return (
    <div className="block column columns is-centered is-multiline is-mobile">
      <a
        href={resume}
        download={"CarlJMcGee-Resume"}
        className="column columns is-centered is-mobile"
      >
        <button
          className={`button column ${
            window.innerWidth >= 550 ? "is-one-third" : ""
          } bg-secondary-dark p-1`}
        >
          Download My Resume
        </button>
      </a>
      <ol
        className={`column is-full is-size-5 has-text-white ${
          window.innerWidth >= 550 ? "px-6" : ""
        }`}
        style={{ listStyle: "inside" }}
      >
        <li>Experienced in organizing and leading groups of people</li>
        <li>
          Can break down complex ideas and explain them in easy to understand
          terms
        </li>
        <li>Quick to pick up on new ideas and information </li>
        <li>
          Proficient in HTML, CSS, Javascript, JQuery, Express servers via Node
          JS, MySQL using Sequelize, and MongoDB using Mongoose, and React
        </li>
        <li>
          Capable of producing full stack applications using MVP practices
        </li>
      </ol>
    </div>
  );
}
