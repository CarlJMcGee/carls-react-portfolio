import * as React from "react";

export interface INavProps {}

export default function Nav(props: INavProps) {
  return (
    <header className="block columns bg-secondary-light is-centered has-text-centered">
      <a className="column has-text-white has-text-weight-bold">About Me</a>
      <a className="column has-text-white has-text-weight-bold">
        Previous Work
      </a>
      <a className="column has-text-white has-text-weight-bold">Contact</a>
    </header>
  );
}
