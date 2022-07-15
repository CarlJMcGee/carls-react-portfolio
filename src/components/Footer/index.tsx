import * as React from "react";
import githubLogo from "./assets/PNG/GitHub-Mark-64px.png";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="footer columns is-centered bg-primary-dark">
      <div className="column is-2 columns">
        <a href="https://github.com/CarlJMcGee">
          <img src={githubLogo} alt="" />
        </a>
      </div>
      <h3 className="column is-2 has-text-centered">© 2022 Carl McGee</h3>
    </footer>
  );
}
