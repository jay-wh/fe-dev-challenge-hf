import { render, screen } from "@testing-library/react";
import { ListingContent } from ".";

const mockProperty = {
  id: "1",
  expired: false,
  listed: new Date("2024-01-01T00:00:00Z"),
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
};

test("renders container element", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByTestId("propertyListingContent")).toBeVisible();
});

test("renders price in correct format", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByText(`£300,000`)).toBeVisible();
});

test("renders beds", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByText(`(B) ${mockProperty.beds}`)).toBeVisible();
});

test("renders baths", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByText(`(S) ${mockProperty.baths}`)).toBeVisible();
});

test("renders receptions", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByText(`(R) ${mockProperty.receptions}`)).toBeVisible();
});

test("renders property summary", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(
    screen.getByText(`${mockProperty.beds} bed ${mockProperty.type} for sale`)
  ).toBeVisible();
});

test("renders property location", async () => {
  render(<ListingContent property={mockProperty} />);

  expect(screen.getByText(mockProperty.location)).toBeVisible();
});
