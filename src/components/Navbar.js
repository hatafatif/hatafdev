import React from "react";
import logo from "../../static/hatafdotdev_2.png"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-item nav-left">
                <img src={logo} alt="main-logo" width={100}/>
            </div>
            <div className="nav-item nav-mid">
                <div className="nav-link">Home</div>
                <div className="nav-link">Skills</div>
                <div className="nav-link">Portfolio</div>
                <div className="nav-link">About</div>
            </div>
            <div className="nav-item nav-right"><button>Hire Me</button></div>
        </nav>
    );
};

export default Navbar;
