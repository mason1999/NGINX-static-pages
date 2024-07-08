import React from "react";
import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Link to="/pageb">
          <button>Go to Page B</button>
        </Link>
        <Link to="/pagec">
          <button>Go to Page C</button>
        </Link>
      </div>
      <h1>Hello world from static page A</h1>
    </div>
  );
};

export default PageA;
