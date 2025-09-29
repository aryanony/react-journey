import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import ProductRegistration from "./ProductRegistration";
import ProductList from "./ProductList";

// Main App component - holds the router and pages
const App = () => {
  // Simple page container style
  const containerStyle = {
    maxWidth: 1100,
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <BrowserRouter>
      <div style={containerStyle}>
        <header>
          <Navigation />
        </header>

        <main style={{ marginTop: 20 }}>
          <Routes>
            {/* Route: product registration (form) */}
            <Route path="/product-registration" element={<ProductRegistration />} />

            {/* Route: product list (view, edit, delete) */}
            <Route path="/product-list" element={<ProductList />} />

            {/* default route -> redirect to registration (you can change as needed) */}
            <Route path="*" element={<ProductRegistration />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
