import React, { useState } from "react";
import logo from "../../static/hatafdotdev_2.png";

const Navbar = () => {
    const [navExpanded, setNetExpanded] = useState(false);

    return (
        <nav className={navExpanded ? "nav-expand" : "nav-contracted"}>
            <div className="nav-item nav-left">
                <img src={logo} alt="main-logo" width={130} />
                {navExpanded && (
                    <div className="nav-item nav-list-hidden">
                        <div className="nav-link">Home</div>
                        <div className="nav-link">Skills</div>
                        <div className="nav-link">Portfolio</div>
                        <div className="nav-link">About</div>
                    </div>
                )}
                <div className="expand-arrow" onClick={() => setNetExpanded((val) => !val)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width={15}
                    >
                        <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                    </svg>
                </div>
            </div>
            <div className="nav-item nav-mid">
                <div className="nav-link">Home</div>
                <div className="nav-link">Skills</div>
                <div className="nav-link">Portfolio</div>
                <div className="nav-link">About</div>
            </div>
            <div className="nav-item nav-right">
                <div className="btn">Hire Me</div>
            </div>
        </nav>
    );
};

export default Navbar;
