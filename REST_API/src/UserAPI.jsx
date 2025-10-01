import React, { useState, useEffect } from "react";

/*
  UserAPI:
  - Fetches user list from jsonplaceholder
  - Shows loading spinner while fetching
  - Handles fetch errors
  - Simple responsive list with basic animation
*/

const cardStyle = {
    background: "white",
    borderRadius: 10,
    padding: 16,
    boxShadow: "0 6px 20px rgba(2,6,23,0.06)",
    marginTop: 16,
};

const userItem = {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #e6eef0",
    marginBottom: 10,
    transition: "transform 120ms ease, box-shadow 120ms ease",
};

export const UserAPI = () => {
    // store users and loading/error states
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch users once when component mounts
    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch users failed:", err);
                setError("Failed to load users. Please try again.");
                setLoading(false);
            });
    }, []); // empty array -> run once on mount

    return (
        <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>User API (jsonplaceholder)</h3>

            {/* Loading UI */}
            {loading && <p style={{ color: "#0ea5a4" }}>Loading users...</p>}

            {/* Error UI */}
            {error && <p style={{ color: "crimson" }}>{error}</p>}

            {/* Data UI */}
            {!loading && !error && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {users.map((u) => (
                        <li
                            key={u.id}
                            style={userItem}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                        >
                            <div style={{ fontWeight: 700 }}>{u.name}</div>
                            <div style={{ color: "#475569" }}>{u.email}</div>
                            <div style={{ color: "#64748b", fontSize: 13 }}>{u.company?.name}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserAPI;
