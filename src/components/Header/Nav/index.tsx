import React, { useEffect } from "react";
import { IHeaderProps } from "..";

export interface INavProps {
  nav: IHeaderProps;
}

export default function Nav(props: INavProps) {
  const { navCurrentSelect, navChangeSelect } = props.nav;
  const navSelect = function (event: React.MouseEvent) {
    const newSelect: string = event.currentTarget.textContent
      ? event.currentTarget.textContent
      : "";
    navChangeSelect(newSelect);
  };

  useEffect(() => {
    document.title = navCurrentSelect;
    localStorage.setItem("navCurrent", navCurrentSelect);
  }, [navCurrentSelect]);

  return (
    <header className="block columns bg-secondary-light is-centered is-vcentered has-text-centered">
      <h2 className="column title primary-dark m-3">
        The Works of <br /> Carl McGee
      </h2>
      <a
        href="#about"
        className={`${navCurrentSelect === "About Me" && "nav-item-selected"} ${
          navCurrentSelect !== "About Me" && "nav-item"
        } column has-text-weight-bold`}
        id="about"
        onClick={(e) => navSelect(e)}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        className={`${
          navCurrentSelect === "Previous Work" && "nav-item-selected"
        } ${
          navCurrentSelect !== "Previous Work" && "nav-item"
        } column has-text-weight-bold`}
        id="work"
        onClick={(e) => navSelect(e)}
      >
        Previous Work
      </a>
      <a
        href="#contact"
        className={`${navCurrentSelect === "Contact" && "nav-item-selected"} ${
          navCurrentSelect !== "Contact" && "nav-item"
        } column has-text-weight-bold`}
        id="contact"
        onClick={(e) => navSelect(e)}
      >
        Contact
      </a>
      <a
        href="#resume"
        className={`${navCurrentSelect === "Resume" && "nav-item-selected"} ${
          navCurrentSelect !== "Resume" && "nav-item"
        } column has-text-weight-bold`}
        id="resume"
        onClick={(e) => navSelect(e)}
      >
        Resume
      </a>
    </header>
  );
}
