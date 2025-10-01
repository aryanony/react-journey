import React, { useState } from "react";

/*
  CityWeather:
  - Lets user enter a city and fetch its current weather
  - Handles loading, success and "city not found" errors
  - Responsive & simple animations
*/

const formRow = { display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" };

const card = {
    background: "white",
    padding: 16,
    borderRadius: 10,
    boxShadow: "0 6px 20px rgba(2,6,23,0.04)",
    marginTop: 16,
};

export default function CityWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "6af70401a345ce40bed6bce8459641a1";

    const fetchWeather = () => {
        if (!city) {
            setError("Please enter a city name");
            setWeather(null);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                city
            )}&appid=${API_KEY}&units=metric`
        )
            .then((res) => {
                if (!res.ok) {
                    // if API returns 404 or other non-200, throw an error with status text
                    throw new Error(`City not found or API error (status ${res.status})`);
                }
                return res.json();
            })
            .then((data) => {
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("City weather fetch error:", err);
                setError("City not found or network error");
                setWeather(null);
                setLoading(false);
            });
    };

    return (
        <div style={card}>
            <h3 style={{ marginTop: 0 }}>City Weather Search</h3>

            <div style={formRow}>
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name (e.g. London)"
                    style={{
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid #e2e8f0",
                        minWidth: 200,
                        flex: "1 1 220px",
                    }}
                />
                <button
                    onClick={fetchWeather}
                    style={{
                        background: "#06b6d4",
                        color: "white",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "none",
                        fontWeight: 700,
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </div>

            {loading && <p style={{ color: "#0ea5a4" }}>Loading...</p>}
            {error && <p style={{ color: "crimson" }}>{error}</p>}

            {!loading && !error && weather && (
                <div style={{ marginTop: 8 }}>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{weather.name}</div>
                    <div>Temperature: {weather.main?.temp ?? "N/A"} °C</div>
                    <div>Humidity: {weather.main?.humidity ?? "N/A"} %</div>
                    <div>Wind: {weather.wind?.speed ?? "N/A"} m/s</div>
                </div>
            )}
        </div>
    );
}
