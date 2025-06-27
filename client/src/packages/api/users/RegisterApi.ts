import { RegisterProps } from "../../../interface/UserProps";
import { FetchData } from "../../fetchManager/FetchManager";

// RegisterApi.ts
const RegisterApi = async (props: RegisterProps) => {
  const Port = "http://localhost:5500";     //defining the backend port
  const registerPort = `${Port}/user/register`;            // defining the route for sign up


  // passing in the fields required in the server side
  const {firstName , lastName, email, password }  = props

  // making an options header for correct data posting
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({firstName, lastName, email, password}),
  };

  // fetching the data from the server
  const response = await FetchData(registerPort, options);

  if (!response.ok) {
    // Throw the entire response object
    const errorData = await response.json();
    console.log(errorData);
    throw { status: response.status, ...errorData };
  }

  return response.json();
}


export default RegisterApi;