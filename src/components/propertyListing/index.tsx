import { ListingContent } from "./listingContent";
import { ListingImage } from "./listingImage";
import { PropertyListing } from "../../utils/types";
import "./index.css";
import { Grid, Typography } from "@mui/material";

export const PropertyListingCard = ({
  property,
  onChange = null,
}: {
  property: PropertyListing;
  onChange?: Function | null;
}) => {
  const handleClick = async () => {
    await window.fetch(`http://localhost:3000/properties/${property.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        ...property,
        expired: true,
      }),
    });

    if (onChange) await onChange();
  };

  return (
    <Grid
      container
      className={`listing-card-container ${property.expired ? "expired" : ""}`}
      data-testid="propertyListing"
    >
      <Grid item xs={12} md={5}>
        <ListingImage image={property.images[0]} />
      </Grid>

      <Grid item xs={12} md={7}>
        <ListingContent property={property} />
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          spacing={1}
          className="listing-card-additional-container"
        >
          <Grid item xs={12}>
            <Typography>
              Listed on: {new Date(property.listed).toLocaleDateString("en-GB")}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            {property.expired ? (
              <div className="expired-text-container">Listing expired</div>
            ) : (
              <a href="#" onClick={handleClick}>
                Expire listing
              </a>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
