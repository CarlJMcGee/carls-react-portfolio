import * as React from "react";
import { ProjectDetails } from "..";
import "./style.css";
import githubLogo from "../../Footer/assets/PNG/GitHub-Mark-Light-64px.png";

export interface IProjectProps extends ProjectDetails {
  viewState: string;
}

export default function Project(props: IProjectProps) {
  const { title, imageLink, link, repo, description, tech, viewState } = props;

  if (viewState === "Detail") {
    return (
      <div className="container columns is-full">
        <div
          className={`block column columns is-multiline is-centered is-8 m-3 has-text-centered `}
        >
          <h3
            className={`column is-size-4 has-text-weight-bold has-text-white is-10 m-0 p-0`}
          >
            {title}
          </h3>
          <a href={repo} className={`column is-10 has-text-link m-0 p-0`}>
            <img src={githubLogo} alt="github logo" width={"20px"} /> Github
            Repo
          </a>
          <a href={link} className="column is-full">
            <img
              src={imageLink}
              alt="screenshot"
              className="project-screenshot"
            />
          </a>
        </div>
        {viewState === "Detail" && (
          <div className="column my-6 py-6">
            <ul>
              <li className="my-2">
                <span className="has-text-weight-bold is-size-5 secondary-light">
                  Description:
                </span>{" "}
                {description}
              </li>
              <li className="my-2">
                <span className="has-text-weight-bold is-size-5 secondary-light">
                  Technology:
                </span>{" "}
                {tech}
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (viewState === "Gallery") {
    return (
      <div
        className={`project-container block column columns is-multiline is-centered is-5 m-3 has-text-centered `}
      >
        <h3
          className={`column is-size-5 has-text-white is-10 m-0 p-0 ${
            window.innerWidth >= 550 ? "project" : ""
          }`}
        >
          {title}
        </h3>
        <a
          href={repo}
          className={`column is-10 has-text-link m-0 p-0 ${
            window.innerWidth >= 550 ? "project" : ""
          }`}
        >
          <img src={githubLogo} alt="github logo" width={"20px"} /> Github Repo
        </a>
        <a href={link} className="column is-full">
          <img
            src={imageLink}
            alt="screenshot"
            className="project-screenshot"
          />
        </a>
      </div>
    );
  }

  return <h3>Something's wrong, I can feel it...</h3>;
}
