import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const server = setupServer(
  http.get("/properties", () => {
    return HttpResponse.json([
      {
        id: "1",
        expired: true,
        listed: "2024-01-01T00:00:00Z",
        type: "flat",
        beds: 1,
        baths: 1,
        receptions: 1,
        price: 300000,
        location: "2a Test Lane, London, E2",
        vendor: "Test Vendor",
        images: [
          {
            url: "https://placehold.co/600x400.png",
            position: 1,
          },
          {
            url: "https://placehold.co/600x400/000000/FFFFFF.png",
            position: 2,
          },
        ],
        amenities: [
          {
            type: "station",
            name: "Madeup Place",
            distance: 0.1,
          },
          {
            type: "underground",
            name: "Cotton Green",
            distance: 0.3,
          },
        ],
      },
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  expect(screen.getByText(/loading/i)).toBeVisible();
});

test("renders properties once valid data has loaded", async () => {
  render(<App />);

  expect(screen.queryByText(/Loading/)).toBeTruthy();

  await waitFor(() =>
    expect(screen.getByTestId("propertyListing")).toBeInTheDocument()
  );

  expect(screen.queryByText(/Loading/)).toBeFalsy();
});

test("renders error once invalid data is loaded", async () => {
  server.use(
    http.get("/properties", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<App />);

  expect(screen.queryByText(/Loading/)).toBeTruthy();

  await waitFor(() => expect(screen.queryByText(/Ooops/)).toBeInTheDocument());

  expect(screen.queryByText(/Loading/)).toBeFalsy();
});
