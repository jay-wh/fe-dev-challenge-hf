import { PropertyApiResponse } from "./types";

export const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

// simple success/failure implementation here, would probably use another library to handle this
export async function fetchProperties(): Promise<PropertyApiResponse> {
  const defaultResult = {
    success: false,
    data: [],
  };

  try {
    const response = await fetch("http://localhost:3000/properties");
    if (!response.ok) return defaultResult;

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch {
    return defaultResult;
  }
}
