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
        <br />
        <br />
        I have recently received a Full Stack Web Development certificate from
        the University of Minnesota Coding Bootcamp program. There I gained
        experience working with MVC and Progressive Javascript and Typescript
        web applications in both vanilla JS using Handlebars and single-page
        sites with React and Next.js. I am proficient in using MySQL and
        sequelize, MongoDB and Mongoose, Prisma, tRPC, GraphQL, Express.js
        servers, Next.js with and without a server, Next Auth, Tailwind,
        Bootstrap and Bulma CSS libraries, server session store and client JSON
        Web Tokens, and Jest unit testing.
        <br />
        <br />
        My background using donor management systems working in blood collection
        informs my decisions in creating positive experiences when using my web
        apps. When in the public health field, the end user should not have to
        think about the software they’re using as they work with donors and
        hospitals. My main objective in creating any application is to have the
        users think about the app as little as possible with clean and clear UI,
        responsive interfaces, and intuitive UX.
      </p>
    </section>
  );
}
