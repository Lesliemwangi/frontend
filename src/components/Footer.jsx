import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Luciannah Ventures</u>
            </h3>
            <p>
              Luciannah Ventures is dedicated to providing exceptional real
              estate solutions with a focus on customer satisfaction and
              community impact.
            </p>
          </div>
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Links</u>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-dark">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-dark">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-dark">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Contact Info</u>
            </h3>
            <p>Address: Nairobi, Kenya</p>
            <p>Email: luciannahventures@realestate.com</p>
            <p>Phone: +254 722 888 111</p>
            <p>Phone: +254 722 111 888</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center" style={{ fontSize: "1.1rem" }}>
            <p>
              &copy; {new Date().getFullYear()} Luciannah Ventures. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
