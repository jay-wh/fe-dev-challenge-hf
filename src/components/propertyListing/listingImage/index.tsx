import { PropertyImage } from "../../../utils/types";
import "./index.css";

export const ListingImage = ({ image }: { image: PropertyImage }) => {
  return (
    <div className="listing-image-container" data-testid="propertyListingImage">
      <img src={image.url} data-testid="propertyListingImageImg" />
    </div>
  );
};
