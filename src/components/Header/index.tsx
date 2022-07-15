import * as React from "react";
import Nav from "./Nav";

export interface IHeaderProps {
  navCurrentSelect: string;
  navChangeSelect: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header(props: IHeaderProps) {
  return <Nav nav={props}></Nav>;
}
