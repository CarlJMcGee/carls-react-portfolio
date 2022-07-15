import * as React from "react";
import Project from "./Project";
import project1 from "./assets/avatarlegends.png";
import project2 from "./assets/screenshot-geo-chat-neighborhoods.herokuapp.com-2022.06.17-20_27_37.png";
import project3 from "./assets/screenshot-carls-tech-blog.herokuapp.com-2022.06.17-20_37_51.png";
import project4 from "./assets/weahterdash.png";
import project5 from "./assets/readmegen.png";

export interface IPortfolioProps {}

export interface ProjectDetails {
  title: string;
  imageLink: string;
  link: string;
  repo: string;
}

export default function Portfolio(props: IPortfolioProps) {
  const [view, setView] = React.useState("Gallery");
  const viewToggle = () => (view === "Gallery" ? "Detail" : "Gallery");

  const projects: ProjectDetails[] = [
    {
      title: "Avatar Legends Unofficial Online Character Sheet",
      imageLink: project1,
      link: "https://avatar-charactersheet.herokuapp.com/",
      repo: "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat",
    },
    {
      title: "Geo Chat Neighborhoods",
      imageLink: project2,
      link: "https://geo-chat-neighborhoods.herokuapp.com/homepage",
      repo: "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat",
    },
    {
      title: "Blog",
      imageLink: project3,
      link: "https://carls-tech-blog.herokuapp.com/",
      repo: "https://github.com/CarlJMcGee/Carls-Tech-Blog",
    },
    {
      title: "Weather Dashboard",
      imageLink: project4,
      link: "https://carljmcgee.github.io/Weather-Dashboard/",
      repo: "https://github.com/CarlJMcGee/Weather-Dashboard",
    },
    {
      title: "Readme Generator",
      imageLink: project5,
      link: "https://github.com/CarlJMcGee/Challenge-9_README-Generator",
      repo: "https://github.com/CarlJMcGee/Challenge-9_README-Generator",
    },
  ];

  return (
    <div className="block columns is-multiline m-6">
      <div className="column is-1 pt-3">
        <button
          className="button column p-1"
          onClick={(e) => setView(viewToggle())}
        >
          {view}
        </button>
      </div>
      <h3 className="title column is-10 m-0">Portfolio:</h3>
      {projects.map(({ title, imageLink, link, repo }) => (
        <Project
          key={title}
          title={title}
          link={link}
          imageLink={imageLink}
          repo={repo}
          viewState={view}
        />
      ))}
    </div>
  );
}
