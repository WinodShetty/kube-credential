
# 🖥️ Kube Credential — Frontend

The **Kube Credential Frontend** is a React + TypeScript single-page application that interacts with two microservices to:

- ✅ Issue digital credentials
- ✅ Verify previously issued credentials

This project provides two responsive pages with clean UI, form validation, error handling, and user feedback.

---

## 📘 Overview

This frontend communicates with the following backend APIs:

| Function           | API Route          |
|--------------------|--------------------|
| Credential Issuance| `POST /issue`      |
| Credential Verification | `POST /verify` |

The backend is deployed to a Kubernetes cluster and exposes public IPs via LoadBalancer services.

---

## 🧱 Tech Stack

| Component   | Technology Used                            |
|-------------|---------------------------------------------|
| Framework   | React 18 (TypeScript)                      |
| Bundler     | Vite                                       |
| Styling     | Tailwind CSS                               |
| Testing     | Vitest + React Testing Library             |
| Routing     | React Router DOM                           |
| Feedback/UI | Native React state + conditional rendering |

---

## 🗂️ Folder Structure

```

frontend/
│
├── src/
│   ├── components/
│   │   └── CredentialForm.tsx         # Reusable form
│   ├── pages/
│   │   ├── IssuancePage.tsx           # Issue credential
│   │   └── VerificationPage.tsx       # Verify credential
│   ├── types/
│   │   └── Credential.ts              # Shared types
│   ├── tests/
│   │   ├── IssuancePage.test.tsx      # Unit tests
│   │   └── VerificationPage.test.tsx  # (optional)
│   ├── App.tsx                        # Routes
│   ├── main.tsx                       # Entry point
│   └── styles.css                     # Tailwind styles
│
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

````

---

## ⚙️ Setup & Run

### 1️⃣ Install dependencies

```bash
npm install
````

### 2️⃣ Start development server

```bash
npm run dev
```

Runs on: [http://localhost:5173](http://localhost:5173)

### 3️⃣ Run unit tests

```bash
npm test
```

### 4️⃣ Build for production

```bash
npm run build
```

Build output goes to `dist/`, ready to be hosted (e.g., on Vercel, Netlify, or S3).

---

## 🧩 Key Files

### `App.tsx`

* Sets up routing between pages using `react-router-dom`.

### `IssuancePage.tsx`

* Displays a form for **name** and **email** input.
* On submit, sends POST request to **Issuance API**.
* Displays:

  * `"Credential issued by worker-n"`
  * `"Credential already issued"`

### `VerificationPage.tsx`

* Accepts credential JSON (via form input).
* Sends POST request to **Verification API**.
* Displays:

  * Timestamp
  * Worker pod ID
  * Or “Credential not found”

### `CredentialForm.tsx`

* Shared component for consistent form structure.
* Handles basic form rendering and submission callbacks.

---

## 🧪 Unit Testing with Vitest

### Testing Stack

| Tool                   | Purpose               |
| ---------------------- | --------------------- |
| Vitest                 | Test runner           |
| @testing-library/react | DOM testing           |
| jsdom                  | Simulates browser DOM |

### Example Test — `IssuancePage.test.tsx`

```ts
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import IssuancePage from "../pages/IssuancePage";

describe("IssuancePage basic render", () => {
  it("renders form and buttons", () => {
    render(
      <BrowserRouter>
        <IssuancePage />
      </BrowserRouter>
    );

    expect(screen.getByRole("heading", { name: /Issue Credential/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Issue Credential/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  });
});
```

### ✅ Test Output

```bash
PASS  src/tests/IssuancePage.test.tsx
✓ IssuancePage basic render (100 ms)

Test Files  1 passed (1)
Tests       1 passed (1)
```

---

## 🎨 UI/UX Features

* Responsive layout using Tailwind CSS
* Centralized form layout
* Clear visual feedback:

  * Loading state
  * Error messages
  * Success messages
* Minimal and accessible design

---

## 🔗 API Integration

The frontend uses `fetch()` or Axios to communicate with the backend APIs.
You can configure the backend base URLs using an `.env` file:

**`.env`**

```env
VITE_ISSUANCE_API=
VITE_VERIFICATION_API=
```

These values are used inside the React components to call the APIs.

---



## 👤 Developer Info

Name: Vinod Kumar Erishetti
Email: vkshettyconnect@gmail.com
Phone: +91-9392158601

---

## 🌐 Deployment

Frontend is deployed at:

🔗 **Frontend URL:** [https://your-kube-credential-frontend.vercel.app](https://your-kube-credential-frontend.vercel.app)



**Thank you!**




