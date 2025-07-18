import { FetchData } from "../../fetchManager/FetchManager";
import { AllProductResponse } from "../../../interface/ProductProps";


// get all products endpoint
export const GetAllProducts = async (): Promise<AllProductResponse | null> => {
  const Port = "http://localhost:5500";     //defining the backend port
  const url = `${Port}/products/all-products`;

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

};