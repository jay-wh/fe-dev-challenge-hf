export type PropertyListing = {
  id: string;
  expired: boolean;
  listed: Date;
  type: string;
  beds: number;
  baths: number;
  receptions: number;
  price: number;
  location: string;
  vendor: string;
  images: PropertyImage[];
  features: PropertyAmenity[];
};

export type PropertyImage = {
  url: string;
  position: number;
};

export type PropertyAmenity = {
  type: string;
  name: string;
  distance: number;
};
