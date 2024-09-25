import { PropertyImage } from "../../../utils/types";
import "./index.css";

export const ListingImage = ({ image }: { image: PropertyImage }) => {
  return (
    <div className="listing-image-container">
      <img src={image.url} />
    </div>
  );
};
