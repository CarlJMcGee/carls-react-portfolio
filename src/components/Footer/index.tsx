import * as React from "react";
import githubLogo from "./assets/PNG/GitHub-Mark-Light-64px.png";
import linkedinLogo from "./assets/PNG/In-White-48@2x.png";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  let year = new Date().getFullYear();

  return (
    <footer className="footer columns is-centered is-vcentered bg-primary-dark">
      <div className="column is-2 columns">
        <a className="column" href="https://github.com/CarlJMcGee">
          <img src={githubLogo} alt="github logo with link" width={"50px"} />
        </a>
        <a
          className="column"
          href="https://www.linkedin.com/in/carl-mcgee-3b9648a0/"
        >
          <img src={linkedinLogo} alt="" width={"50px"} />
        </a>
      </div>
      <h3 className="column is-2 has-text-centered">{year} Carl McGee</h3>
    </footer>
  );
}
