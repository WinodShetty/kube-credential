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

    // Check heading
    expect(screen.getByRole("heading", { name: /Issue Credential/i })).toBeInTheDocument();

    // Check inputs
    expect(screen.getByPlaceholderText(/john@example.com/i)).toBeInTheDocument();

    // Check buttons
    expect(screen.getByRole("button", { name: /Issue Credential/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  });
});
