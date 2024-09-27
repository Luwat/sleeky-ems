import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthData } from "./definitions";

export const signUp = async (
  url: string | URL | Request,
  { arg }: { arg: AuthData }
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  const data = await response.json();

  if (data.error) {
     console.log(data.message);
     return
  } else if (data.message === "Unauthorized") {
    console.log(data.message = "Employer not authorized");
    return 
  }

  await AsyncStorage.setItem("accessToken", data.accessToken);
  return data;
};

export const login = async (
  url: string | URL | Request,
  { arg }: { arg: AuthData }
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  const data = await response.json();

  if (data.error) {
    console.log(data.message);
    return;
  } else if (data.message === "Unauthorized") {
    console.log((data.message = "Employer not authorized"));
    return;
  }

  await AsyncStorage.setItem("accessToken", data.accessToken);
  return data;
};
