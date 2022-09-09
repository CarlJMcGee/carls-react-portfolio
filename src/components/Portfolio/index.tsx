import * as React from "react";
import Project from "./Project";
import project1 from "./assets/avatarlegends.png";
import project2 from "./assets/screenshot-geo-chat-neighborhoods.herokuapp.com-2022.06.17-20_27_37.png";
import project3 from "./assets/screenshot-carls-tech-blog.herokuapp.com-2022.06.17-20_37_51.png";
import project4 from "./assets/weahterdash.png";
import project5 from "./assets/readmegen.png";
import project6 from "./assets/petpal.png";
import project7 from "./assets/Screenshot 2022-08-22 at 17-56-33 Shit Screen.png";

export interface IPortfolioProps {}

export interface ProjectDetails {
  title: string;
  imageLink: string;
  link: string;
  repo: string;
  description: string;
  tech: string;
}

export default function Portfolio(props: IPortfolioProps) {
  const [view, setView] = React.useState("Gallery");
  const viewToggle = () => (view === "Gallery" ? "Detail" : "Gallery");

  const projects: ProjectDetails[] = [
    {
      title: "Sh*t Screen Movie Randomizer",
      imageLink: project7,
      link: "https://shit-screen-movie-picker.vercel.app/",
      repo: "https://github.com/CarlJMcGee/movie-picker",
      description:
        "A site for organizing my movies for my friends to see what I have available and add movies to a wish list for me to find and purchase later. Movie details are taken from IMDB. By logging in with Discord, you can vote for an available movie and the site will pick a random film for us to watch.",
      tech: "T3 Stack (Typescript, Tailwind, TRPC, Prisma, Next.js, NextAuth) and Bootstrap React",
    },
    {
      title: "Avatar Legends Unofficial Online Character Sheet",
      imageLink: project1,
      link: "https://avatar-legends-character-sheet-production.up.railway.app/",
      repo: "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat",
      description:
        "An unofficial online character sheet alternative for the Avatar the Last Airbender tabletop RPG by Magpie Games.",
      tech: "Javascript, Express, and Handlebars",
    },
    {
      title: "Pet Pals",
      imageLink: project6,
      link: "https://pet-tinder-production.up.railway.app/",
      repo: "https://github.com/chrislee-webdev/pet-tinder",
      description:
        "Pet Pal is a full-stack web application that allows pet parents to find new pals for their pets to play with. Joining is free, and all you have to do is create your own profile and set up your username and password. Once users have created their account, they can add their animal and start searching for new pet pals for your pet pal",
      tech: "MERN Stack (MongoDB, Express, React, NodeJS), GraphQL, Bootstrap",
    },
    {
      title: "Geo Chat Neighborhoods",
      imageLink: project2,
      link: "https://geo-chatneighborhood-group-chat-production.up.railway.app/",
      repo: "https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat",
      description:
        "A site for locals to connect and socialize online with the people living around them. Sign up with your city name and be automatically added to your neighborhood’s homepage",
      tech: "Javascript, Express, and Handlebars.",
    },
    {
      title: "Blog",
      imageLink: project3,
      link: "https://carls-tech-blog-production.up.railway.app/",
      repo: "https://github.com/CarlJMcGee/Carls-Tech-Blog",
      description: "A blog for random thoughts and ideas I have",
      tech: "Javascript, Express, Handlebars, mySQL, Sequelize",
    },
    {
      title: "Weather Dashboard",
      imageLink: project4,
      link: "https://carljmcgee.github.io/Weather-Dashboard/",
      repo: "https://github.com/CarlJMcGee/Weather-Dashboard",
      description:
        "A basic current weather and 5 day forcast web app using the OpenWeather API. Saves your previously searched cities.",
      tech: "Javascript, OpenWeather API",
    },
    {
      title: "Readme Generator",
      imageLink: project5,
      link: "https://github.com/CarlJMcGee/Challenge-9_README-Generator",
      repo: "https://github.com/CarlJMcGee/Challenge-9_README-Generator",
      description:
        "Command line tool for creating a standardized and professional readme for your project",
      tech: "Javascript, NodeJS",
    },
  ];

  return (
    <div
      className={`block columns is-multiline ${
        window.innerWidth >= 550 ? "m-6" : "m-0"
      }`}
    >
      <div className="column is-1 pt-3">
        {window.innerWidth >= 770 ? (
          <button
            className="button column p-1"
            onClick={(e) => setView(viewToggle())}
          >
            {view}
          </button>
        ) : (
          ""
        )}
      </div>
      <h3 className="title column is-10 m-0">Portfolio:</h3>
      {projects.map(({ title, imageLink, link, repo, description, tech }) => (
        <Project
          key={title}
          title={title}
          link={link}
          imageLink={imageLink}
          repo={repo}
          description={description}
          tech={tech}
          viewState={view}
        />
      ))}
    </div>
  );
}
