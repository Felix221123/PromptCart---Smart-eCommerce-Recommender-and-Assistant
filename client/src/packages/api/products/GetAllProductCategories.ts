import { FetchData } from "../../fetchManager/FetchManager";
import { AllProductCategoriesResponse } from "../../../interface/ProductProps";

// get all product categories
export const GetAllProductCategories = async (): Promise<AllProductCategoriesResponse | null> => {
  const Port = "http://localhost:5500";     //defining the backend port
  const url = `${Port}/products/categories`;

  // making an options header for correct data posting
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  };

  // fetching the data from the server
  const response = await FetchData(url, options);

  if (!response.ok) {
    // Throw the entire response object
    const errorData = await response.json();
    console.log(errorData);
    throw { status: response.status, ...errorData };
  }

  return response.json();

}
