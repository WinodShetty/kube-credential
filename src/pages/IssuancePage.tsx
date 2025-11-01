import React, { useState } from "react";

// The port if your issuance service runs on a different port.
const ISSUANCE_API = import.meta.env.VITE_ISSUANCE_API || "http://localhost:4000/issue";

export default function IssuancePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleIssue = async () => {
    if (!name || !email) {
      setMessage("Please provide both name and email.");
      return;
    }

    try {
      const res = await fetch(ISSUANCE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          data.message || `Credential issued by ${data.worker} at ${data.issuedAt}`
        );
      } else {
        setMessage(data.message || "Error issuing credential");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error: Could not reach backend");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", display: "grid", gap: 12 }}>
      <h2 style={{ textAlign: "center" }}>Issue Credential</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        Fill name & email — the backend will return which worker (pod) issued it.
      </p>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={handleIssue}
          style={{ flex: 1, background: "#0b5fff", color: "#fff", padding: 10, borderRadius: 8 }}
        >
          Issue Credential
        </button>

        <button
          onClick={handleReset}
          style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        >
          Reset
        </button>
      </div>

      {message && <p style={{ marginTop: 10, color: "green", fontWeight: 500 }}>{message}</p>}
    </div>
  );
}
