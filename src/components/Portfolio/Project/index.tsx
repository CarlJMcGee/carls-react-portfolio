import * as React from "react";
import { ProjectDetails } from "..";

export interface IProjectProps extends ProjectDetails {}

export default function Project(props: IProjectProps) {
  const { title, imageLink, link, repo } = props;

  return (
    <div className="project-container column columns is-multiline is-5 m-3 has-text-centered ">
      <h3 className="title column is-full m-0 p-0 project">{title}</h3>
      <a href={repo} className="column is-full m-0 p-0 project">
        Github Repo
      </a>
      <a href={link} className="column is-full">
        <img src={imageLink} alt="screenshot" className="" />
      </a>
    </div>
  );
}
