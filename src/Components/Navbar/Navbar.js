import React from "react";
import { Link } from "react-router-dom";
import "./Navbarcss";
import { Linka, Logo, NavbarSection, NavContent, NavLinks } from "./Navbarcss";
export default function Navbar() {
  return (
    <NavbarSection className="Navbar">
      <div className="container">
        <NavContent>
          <Logo>Ultra Profile</Logo>

          <NavLinks>
            <li>
              <Link className="lin" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="lin" to={"/todo"}>
                Todo
              </Link>
            </li>
            <li>
              <Linka href="#proto">Portofolio</Linka>
            </li>
            <li>
              <Linka href="#">Profile</Linka>
            </li>
            <li>
              <Linka href="#work">Work</Linka>
            </li>
            <li>
              <Linka href="#">Social Media</Linka>
            </li>
            <li>
              <Link className="lin" to={"/contact"}>
                Contact
              </Link>
            </li>
          </NavLinks>
        </NavContent>
      </div>
    </NavbarSection>
  );
}

// <Link to={"/"}>Home</Link>
// <Link to={"/contact"}>Contact</Link>
