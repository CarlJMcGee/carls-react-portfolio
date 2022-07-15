import * as React from "react";
import headshot from "./assets/headshot.png";
export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <section className="block columns is-centered is-multiline is-vcentered">
      <h3 id="about-me" className="title column is-full has-text-white m-2">
        What am I about...
      </h3>
      <figure className="image column is-one-quarter is-6-mobile">
        <img
          src={headshot}
          alt="headshot"
          style={{ width: "100%" }}
          className="is-rounded"
        />
      </figure>
      <p className="column is-size-5 has-text-white m-2">
        I'm a new junior developer fresh out of coding bootcamp. I'm leaving a
        five year career in Phlebotomy and blood product donation to persue a
        career in web development and I'm ready to take on new opportunities and
        challenges.
        <br /> <br />I am experienced in using HTML, CSS, Javascript, and
        Typescript to create mobile first progressive web apps within a MVC
        standard and within React. I'm ready and excited to continue expanding
        on my development prowess in both the aformentioned frameworks and
        beyond. Check out some of my work!
      </p>
    </section>
  );
}
