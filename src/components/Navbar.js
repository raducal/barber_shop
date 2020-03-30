import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [navColor, setNavColor] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 200 ? "transparent" : "#000";

      console.log(window.scrollY);

      setNavColor(backgroundcolor);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav
      // className="navbar-main"
      style={{
        backgroundColor: `${navColor}`,
        zIndex: 999,
        position: "fixed",
        top: 0,
        height: "4rem",
        width: "100%",
        fontSize: "1.4rem"
      }}
    >
      <ul className="nav-links">
        <li>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
          >
            Prices
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
