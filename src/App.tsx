import { useEffect, useState } from "react";
import { PropertyListingCard } from "./components/propertyListing";
import { PropertyListing } from "./utils/types";
import Error from "./components/Error";
import { Grid, Typography } from "@mui/material";

const App = () => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [errored, setErrored] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await fetch("http://localhost:3000/properties");

        if (!response.ok) setErrored(true);

        const result = await response.json();

        setLoading(false);
        setProperties(result);
      } catch {
        setErrored(true);
      }
    };

    loadProperties();
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
              />
            ))}
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default App;
