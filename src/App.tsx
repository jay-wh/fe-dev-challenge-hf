import { useEffect, useState } from "react";
import { PropertyListingCard } from "./components/propertyListing";
import { PropertyListing } from "./utils/types";
import Error from "./components/Error";
import { Grid, Typography } from "@mui/material";
import { fetchProperties } from "./utils/helpers";

const App = () => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [errored, setErrored] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    const result = await fetchProperties();

    if (result.success) {
      setProperties(result.data);
    } else {
      setErrored(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (errored) {
    return <Error />;
  }

  return (
    <main>
      <h1>Properties</h1>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {properties.map((property: PropertyListing) => (
              <PropertyListingCard
                key={`property-${property.id}`}
                property={property}
                onChange={loadData}
              />
            ))}
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default App;
