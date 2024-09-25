import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders properties heading", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Properties",
    })
  ).toBeVisible();
});

test("renders loading text", async () => {
  render(<App />);

  // expect(screen.findby("p")).toHaveTextContent("Loading...");
});
