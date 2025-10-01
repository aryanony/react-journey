import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import UserAPI from "./UserAPI";
import DelhiWeather from "./DelhiWeather";
import CityWeather from "./CityWeather";

/*
  App: main layout + router
  - Wrap everything in BrowserRouter
  - Show Navbar on every page
  - Define routes for UserAPI, DelhiWeather, CityWeather
*/
const App = () => {
  const wrapperStyle = {
    fontFamily: "Inter, Arial, sans-serif",
    maxWidth: 1100,
    margin: "18px auto",
    padding: 16,
  };

  return (
    <div style={wrapperStyle}>
      <BrowserRouter>
        <Navbar />

        <h2 style={{ marginTop: 18, color: "#0f172a" }}>REST API in React — Examples</h2>

        <div style={{ marginTop: 18 }}>
          <Routes>
            {/* default route -> redirect to /user */}
            <Route path="/" element={<Navigate to="/user" replace />} />

            <Route path="/user" element={<UserAPI />} />
            <Route path="/delhi-weather" element={<DelhiWeather />} />
            <Route path="/city-weather" element={<CityWeather />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
