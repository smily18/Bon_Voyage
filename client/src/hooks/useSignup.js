import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { URL } from "../App";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, gender, dob, email, password) => {
    const response = await fetch(`${URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({firstName, lastName, gender, dob, email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };
  return {signup,isLoading,error}
};
