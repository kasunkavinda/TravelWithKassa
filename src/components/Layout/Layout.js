import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="container max-w-full">{props.children}</div>
    </div>
  );
}

export default Layout;
