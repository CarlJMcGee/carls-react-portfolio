import * as React from "react";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="foot bg-secondary-dark">
      <h3 className="content is-size-7 has-text-centered">© 2022 Carl McGee</h3>
    </footer>
  );
}
