import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="bg-warning-subtle rounded-2 p-3 shadow-lg">
      <Link style={{ textDecoration: "none" }} to={"/login"}>
        <h1 className="font-weight-bold">Create-todo</h1>
      </Link>
    </div>
  </div>
  );
}

export default Home;
