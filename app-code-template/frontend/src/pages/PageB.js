import React from "react";
import { Link } from "react-router-dom";

const PageB = () => {
  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Link to="/">
          <button>Go to Page A</button>
        </Link>
        <Link to="/pagec">
          <button>Go to Page C</button>
        </Link>
      </div>
      <h1>Hello world from static page B</h1>
    </div>
  );
};

export default PageB;
