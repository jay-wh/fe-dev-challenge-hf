import { render, screen } from "@testing-library/react";
import { ListingImage } from ".";

const mockPropertyImage = {
  url: "https://placehold.co/600x400.png",
  position: 1,
};

test("renders all elements", async () => {
  render(<ListingImage image={mockPropertyImage} />);

  expect(screen.getByTestId("propertyListingImage")).toBeVisible();
  expect(screen.getByTestId("propertyListingImageImg")).toBeVisible();
});

test("renders correct image", async () => {
  render(<ListingImage image={mockPropertyImage} />);

  const image = screen.getByTestId("propertyListingImageImg");

  expect(image).toBeVisible();
  expect(image).toHaveAttribute("src", mockPropertyImage.url);
});
