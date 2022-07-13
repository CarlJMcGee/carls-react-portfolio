import * as React from "react";
import Project from "./Project";

export interface IPortfolioProps {}

export interface ProjectDetails {
  title: string;
  imageLink: string;
  link: string;
  repo: string;
}

export default function Portfolio(props: IPortfolioProps) {
  return (
    <div className="block columns is-multiline m-6">
      <h3 className="title column is-full m-0">Portfolio:</h3>
      <Project
        title={"Project 1"}
        imageLink={"https://via.placeholder.com/500"}
        link={
          "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat/blob/main/public/images/nascreenshot.png"
        }
        repo={"https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat"}
      />
      <Project
        title={"Project 2"}
        imageLink={"https://via.placeholder.com/500"}
        link={
          "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat/blob/main/public/images/nascreenshot.png"
        }
        repo={"https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat"}
      />
      <Project
        title={"Project 3"}
        imageLink={"https://via.placeholder.com/500"}
        link={
          "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat/blob/main/public/images/nascreenshot.png"
        }
        repo={"https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat"}
      />
      <Project
        title={"Project 4"}
        imageLink={"https://via.placeholder.com/500"}
        link={
          "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat/blob/main/public/images/nascreenshot.png"
        }
        repo={"https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat"}
      />
    </div>
  );
}
