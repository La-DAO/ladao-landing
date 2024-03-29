import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>
        {children}
        <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
