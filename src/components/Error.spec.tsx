import { render, screen } from "@testing-library/react";
import Error from "./Error";

test("renders error heading", async () => {
  render(<Error />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Ooops!",
    })
  ).toBeVisible();
});

test("renders error text", async () => {
  render(<Error />);

  expect(screen.getByText(/error/i)).toBeVisible();
});
