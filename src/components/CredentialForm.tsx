import React, { useState } from "react";
import axios from "axios";
import type { Credential } from "../types/credential";



interface Props {
  apiUrl: string;            // full URL e.g. http://localhost:3000/issue
  submitLabel: string;
}

export default function CredentialForm({ apiUrl, submitLabel }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    const payload: Credential = { name: name.trim(), email: email.trim() };

    try {
      setLoading(true);
      const res = await axios.post(apiUrl, payload, { headers: { "Content-Type": "application/json" } });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err: any) {
      if (err.response) {
        setError(`Server: ${JSON.stringify(err.response.data)}`);
      } else {
        setError("Network error: could not reach server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{maxWidth: 720, margin: "24px auto", padding: 16}}>
      <form onSubmit={handleSubmit} style={{display: "grid", gap: 12}}>
        <label>
          <div style={{fontWeight: 600}}>Full name</div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" style={{width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc"}} />
        </label>
        <label>
          <div style={{fontWeight: 600}}>Email</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" type="email" style={{width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc"}} />
        </label>

        <div style={{display: "flex", gap: 12}}>
          <button disabled={loading} style={{background: "#0b5fff", color: "white", padding: "10px 16px", borderRadius: 8, border: "none", cursor: "pointer"}}>
            {loading ? "Please wait..." : submitLabel}
          </button>
          <button type="button" onClick={() => { setName(""); setEmail(""); setResponse(null); setError(null); }} style={{padding: "10px 12px", borderRadius: 8}}>Reset</button>
        </div>

        {error && <div style={{color: "crimson", whiteSpace: "pre-wrap"}}>{error}</div>}
        {response && <pre style={{background: "#f7f9ff", padding: 12, borderRadius: 8, whiteSpace: "pre-wrap"}}>{response}</pre>}
      </form>
    </div>
  );
}
