import * as React from "react";

export interface INavProps {}

export default function Nav(props: INavProps) {
  const navSelect = function (event: React.MouseEvent) {
    console.log(event.currentTarget.textContent);
  };

  return (
    <header className="block columns bg-secondary-light is-centered is-vcentered has-text-centered">
      <h2 className="column title primary-alt">
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
