import React from "react";
import CredentialForm from "../components/CredentialForm";

// Adjust port if verification service runs on another
const VERIFY_API = import.meta.env.VITE_VERIFY_API || "http://localhost:3001/verify";

export default function VerificationPage() {
  return (
    <div>
      <h2 style={{textAlign: "center", marginTop: 20}}>Verify Credential</h2>
      <p style={{textAlign: "center", color: "#555"}}>Enter the same credential to verify whether it was issued.</p>
      <CredentialForm apiUrl={VERIFY_API} submitLabel="Verify Credential" />
    </div>
  );
}
