import { AllProductResponse } from "@/interface/ProductProps";
import { ApiError } from "@/interface/ProductProps";

// get products by search query
export const GetProductBySearch = async (
  query_text: string
): Promise<AllProductResponse | null> => {
  const BASE_URL = "http://127.0.0.1:8000"; // FastAPI server
  const url = `${BASE_URL}/product_search?query_text=${encodeURIComponent(query_text)}`;

  // Fetch options
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw { status: response.status, ...errorData } as ApiError;
    }

    const data = await response.json();
    return data ?? null;
  } catch (error: unknown) {
    console.error("Fetch failed:", error);
    throw error; // Let React catch and handle this
  }
};
