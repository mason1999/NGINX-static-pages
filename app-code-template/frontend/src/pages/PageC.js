import React from "react";
import { Link } from "react-router-dom";

const PageC = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
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
        <Link to="/pageb">
          <button>Go to Page B</button>
        </Link>
      </div>
      <h1>Hello world from static page C</h1>
    </div>
  );
};

export default PageC;
