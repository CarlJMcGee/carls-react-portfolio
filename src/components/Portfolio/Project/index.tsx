import * as React from "react";
import { ProjectDetails } from "..";
import "./style.css";
import githubLogo from "../../Footer/assets/PNG/GitHub-Mark-Light-64px.png";

export interface IProjectProps extends ProjectDetails {
  viewState: string;
}

export default function Project(props: IProjectProps) {
  const { title, imageLink, link, repo, viewState } = props;

  return (
    <div
      className={`project-container block column columns is-multiline is-centered ${
        viewState === "Gallery" ? "is-5" : "is-full"
      } m-3 has-text-centered `}
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
        <img src={imageLink} alt="screenshot" className="project-screenshot" />
      </a>
    </div>
  );
}
