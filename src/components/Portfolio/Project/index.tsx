import * as React from "react";
import { ProjectDetails } from "..";
import "./style.css";

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
      <h3 className="title column is-size-5 has-text-white is-10 m-0 p-0 project">
        {title}
      </h3>
      <a href={repo} className="column is-10 has-text-link m-0 p-0 project">
        Github Repo
      </a>
      <a href={link} className="column is-full">
        <img src={imageLink} alt="screenshot" className="project-screenshot" />
      </a>
    </div>
  );
}
