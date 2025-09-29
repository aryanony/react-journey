import React from "react";
import { Link } from "react-router-dom";

// Simple navigation bar using inline styles
const navStyle = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    background: "#0ea5a4", // teal
    padding: "12px 16px",
    borderRadius: 8,
    color: "white",
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
};

const Navigation = () => {
    return (
        <nav style={navStyle}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>MyStore</div>
            <div style={{ marginLeft: 12 }}>
                <Link to="/product-registration" style={linkStyle}>
                    Product Registration
                </Link>
            </div>
            <div>
                <Link to="/product-list" style={linkStyle}>
                    Product List
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
