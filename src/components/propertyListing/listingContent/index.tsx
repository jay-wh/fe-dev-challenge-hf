import { Box, Grid, Typography } from "@mui/material";
import { PropertyListing } from "../../../utils/types";
import "./index.css";
import { currency } from "../../../utils/helpers";

export const ListingContent = ({ property }: { property: PropertyListing }) => {
  return (
    <Grid
      container
      spacing={2}
      padding={"16px"}
      data-testid="propertyListingContent"
    >
      <Grid item xs={12}>
        <Typography variant="caption">Guide price</Typography>

        <Typography variant="h6">{currency.format(property.price)}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ display: "inline-block", paddingRight: "8px" }}>
          (B) {property.beds}
        </Box>

        <Box sx={{ display: "inline-block", paddingRight: "8px" }}>
          (S) {property.baths}
        </Box>

        <Box sx={{ display: "inline-block" }}>(R) {property.receptions}</Box>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          {property.beds} bed {property.type} for sale
        </Typography>

        <Typography variant="caption">{property.location}</Typography>
      </Grid>

      <Grid item xs={12}></Grid>
    </Grid>
  );
};
