import React, { useEffect } from "react";

export interface INavProps {
  nav: {
    navCurrentSelect: string;
    navChangeSelect: React.Dispatch<React.SetStateAction<string>>;
  };
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
  }, [navCurrentSelect]);

  return (
    <header className="block columns bg-secondary-light is-centered is-vcentered has-text-centered">
      <h2 className="column title primary-dark m-3">
        The Works of <br /> Carl McGee
      </h2>
      <a
        className="column has-text-white has-text-weight-bold"
        id="about"
        onClick={(e) => navSelect(e)}
      >
        About Me
      </a>
      <a
        className="column has-text-white has-text-weight-bold"
        id="work"
        onClick={(e) => navSelect(e)}
      >
        Previous Work
      </a>
      <a
        className="column has-text-white has-text-weight-bold"
        id="contact"
        onClick={(e) => navSelect(e)}
      >
        Contact
      </a>
    </header>
  );
}
