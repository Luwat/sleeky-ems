import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthData } from "./definitions";

export const signUp = async (
  url: string | URL | Request,
  { arg }: { arg: AuthData }
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message);
    }

    await AsyncStorage.setItem("accessToken", data.accessToken);

    return data;
  } catch (error: any) {
    if (error.message === "Unauthorized") {
      throw new Error((error.message = "User not authorized"));
    }
    throw new Error(error.message);
  }
};

export const login = async (
  url: string | URL | Request,
  { arg }: { arg: AuthData }
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message);
    }

    await AsyncStorage.setItem("accessToken", data.accessToken);
    
    return data;
  } catch (error: any) {
    if (error.message === "Unauthorized") {
      throw new Error((error.message = "User not authorized"));
    }

    throw new Error(error.message);
  }
};

export const logout = async (
  url: string | URL | Request,
  { arg }: { arg: string }
) => {
  const accessToken = await AsyncStorage.removeItem(arg);
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
