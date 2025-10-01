import React, { useState, useEffect } from "react";

/*
  DelhiWeather:
  - Fetches current weather for Delhi once on mount
  - Uses OpenWeatherMap API (you had the API key in previous code)
  - Shows loading, success and error UIs
  - Guards against missing fields in response
*/

const card = {
    background: "linear-gradient(180deg, #f8fafc, #ffffff)",
    padding: 18,
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(2,6,23,0.04)",
    marginTop: 16,
};

const small = { color: "#475569", fontSize: 14 };

function DelhiWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace with your API key (you had one). Keep it secure in prod.
    const API_KEY = "6af70401a345ce40bed6bce8459641a1";

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}&units=metric`
        )
            .then((res) => {
                if (!res.ok) throw new Error("Weather API response not ok");
                return res.json();
            })
            .then((data) => {
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Delhi weather fetch error:", err);
                setError("Unable to fetch weather. Try again later.");
                setLoading(false);
            });
    }, [API_KEY]); // API key stable -> safe to include

    return (
        <div style={card}>
            <h3 style={{ marginTop: 0 }}>Delhi Weather (OpenWeatherMap)</h3>

            {loading && <p style={{ color: "#0ea5a4" }}>Loading weather...</p>}

            {error && <p style={{ color: "crimson" }}>{error}</p>}

            {!loading && !error && weather && (
                <div>
                    <div style={{ fontWeight: 800, fontSize: 20 }}>{weather.name}</div>

                    {/* Guard access with optional chaining */}
                    <div style={small}>Temperature: {weather.main?.temp ?? "N/A"} °C</div>
                    <div style={small}>Humidity: {weather.main?.humidity ?? "N/A"} %</div>
                    <div style={small}>Wind Speed: {weather.wind?.speed ?? "N/A"} m/s</div>

                    {/* Small icon if available */}
                    {weather.weather?.[0]?.icon && (
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather icon"
                            style={{ width: 80, height: 80 }}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default DelhiWeather;
