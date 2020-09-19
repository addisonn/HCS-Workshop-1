import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Addison Zhang</h1>
        <div className="info-bar">
          <p className="info-item">zhangx1@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com/addi_sonn" }}
            target="_blank"
          >
            Insta
          </Link>
          <Link
            className="info-link"
            to={{
              pathname: "https://www.linkedin.com/in/addison-zhang-595631176/"
            }}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/education" }}>
            Education
          </Link>
        </div>
      </div>
    </>
  );
}
