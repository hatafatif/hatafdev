import Navbar from "./Navbar";
import React from "react";
import "../styles/global.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
