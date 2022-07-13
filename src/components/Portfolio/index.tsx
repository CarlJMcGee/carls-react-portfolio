import * as React from "react";
import Projects from "./Project";

export interface IPortfolioProps {}

export default function Portfolio(props: IPortfolioProps) {
  return (
    <div>
      <h3 className="title">Portfolio</h3>
      <Projects />
    </div>
  );
}
