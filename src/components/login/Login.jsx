import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="card card-body mb-4 p-4">
        <h2 className="display-5 text-center mb-4">
          <i className="fas fa-sign-in-alt" />
          Please loggin to search...
        </h2>
        <a href="http://localhost:8888">
          <button className="btn btn-primary btn-lg btn-block mb-2">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
