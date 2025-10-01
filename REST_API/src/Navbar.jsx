import React from "react";
import { Link, useLocation } from "react-router-dom";

/*
  Simple responsive navbar with inline styles.
  Active link gets a slightly different style.
*/
const navWrap = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(90deg,#06b6d4,#0ea5a4)",
    padding: "12px 16px",
    borderRadius: 10,
    color: "white",
    flexWrap: "wrap",
};

const leftStyle = { display: "flex", gap: 12, alignItems: "center" };

const linkBase = {
    color: "white",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 8,
    transition: "transform 120ms ease, background 120ms ease",
    fontWeight: 600,
};

export default function Navbar() {
    // useLocation helps to highlight active link
    const loc = useLocation();

    return (
        <nav style={navWrap}>
            <div style={leftStyle}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>API-Demo</div>
                <div style={{ display: "flex", gap: 8, marginLeft: 12 }}>
                    <Link
                        to="/user"
                        style={{
                            ...linkBase,
                            background: loc.pathname === "/user" ? "rgba(255,255,255,0.14)" : "transparent",
                        }}
                    >
                        User API
                    </Link>

                    <Link
                        to="/delhi-weather"
                        style={{
                            ...linkBase,
                            background: loc.pathname === "/delhi-weather" ? "rgba(255,255,255,0.14)" : "transparent",
                        }}
                    >
                        Delhi Weather
                    </Link>

                    <Link
                        to="/city-weather"
                        style={{
                            ...linkBase,
                            background: loc.pathname === "/city-weather" ? "rgba(255,255,255,0.14)" : "transparent",
                        }}
                    >
                        City Weather
                    </Link>
                </div>
            </div>

            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 14 }}>Demo: fetch & UI patterns</div>
        </nav>
    );
}
