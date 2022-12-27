import React, { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="uk-container">{children}</main>
    </Fragment>
  );
};

export default Layout;
