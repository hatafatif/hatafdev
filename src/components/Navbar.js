import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/portfolio"> Project Portfolio </Link>
            <Link to="/skills"> Skills </Link>
            <Link to="/about"> About Me </Link>
        </nav>
    );
};

export default Navbar;
