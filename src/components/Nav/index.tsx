import React, { useEffect } from "react";
import { IHeaderProps } from "../Header";

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
    console.log(event.currentTarget.textContent);
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
      <h3
        className={`${navCurrentSelect === "About Me" && "nav-item-selected"} ${
          navCurrentSelect !== "About Me" && "nav-item"
        } column has-text-weight-bold`}
        id="about"
        onClick={(e) => navSelect(e)}
      >
        About Me
      </h3>
      <h3
        className={`${
          navCurrentSelect === "Previous Work" && "nav-item-selected"
        } ${
          navCurrentSelect !== "Previous Work" && "nav-item"
        } column has-text-weight-bold`}
        id="work"
        onClick={(e) => navSelect(e)}
      >
        Previous Work
      </h3>
      <h3
        className={`${navCurrentSelect === "Contact" && "nav-item-selected"} ${
          navCurrentSelect !== "Contact" && "nav-item"
        } column has-text-weight-bold`}
        id="contact"
        onClick={(e) => navSelect(e)}
      >
        Contact
      </h3>
    </header>
  );
}
