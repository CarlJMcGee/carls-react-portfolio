import * as React from "react";
import headshot from "../../assets/headshot.png";
export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <section>
      <h3 id="about-me" className="title">
        What am I about...
      </h3>
      <figure className="image">
        <img
          src={headshot}
          alt="headshot"
          style={{ width: "30%" }}
          className="is-rounded"
        />
      </figure>
      <h3 className="">Test</h3>
    </section>
  );
}
