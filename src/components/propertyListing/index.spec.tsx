import { render, screen } from "@testing-library/react";
import { PropertyListingCard } from ".";

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

test("renders all elements", async () => {
  render(<PropertyListingCard property={mockProperty} />);

  expect(screen.getByTestId("propertyListing")).toBeInTheDocument();
  expect(screen.getByTestId("propertyListingImage")).toBeInTheDocument();
  expect(screen.getByTestId("propertyListingContent")).toBeInTheDocument();
});

test("renders date in en-GB format", async () => {
  render(<PropertyListingCard property={mockProperty} />);

  expect(screen.getByText("Listed on: 01/01/2024")).toBeInTheDocument();
});

test("renders expire listing action", async () => {
  render(<PropertyListingCard property={mockProperty} />);

  expect(screen.getByText("Expire listing")).toBeInTheDocument();
});

// TODO create test for seeing "expired" text
// TODO create test for clicking "expired" link and ensuring API is called
