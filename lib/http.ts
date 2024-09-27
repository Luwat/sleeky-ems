import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmployeesData } from "./definitions";
import { formSchema } from "./config";

export const fetchEmployees = async (url: string | URL | Request) => {
    const accessToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.log("Failed to get employees");
  }

  const data = await response.json();
  return data;
};

export const fetchEmployee = async (url: string | URL | Request) => {
  const value = await AsyncStorage.getItem("accessToken");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${value}`,
    },
  });
  const data = await response.json();
  return data;
};

export const createEmployees = async (
  url: string | URL | Request,
  { arg }: { arg: EmployeesData }
) => {
  const parsedFormData = formSchema.parse(arg);
  const value = await AsyncStorage.getItem("accessToken");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${value}`,
    },
    body: JSON.stringify(parsedFormData),
  });

  const data = await response.json();
  return data;
};

export const updateEmployee = async (
  url: string | URL | Request,
  { arg }: { arg: EmployeesData }
) => {
  const parsedFormData = formSchema.parse(arg);
  const value = await AsyncStorage.getItem("accessToken");
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${value}`,
    },
    body: JSON.stringify(parsedFormData),
  });

  const data = await response.json();

  if (data.message) {
    console.log(data.message);
    return;
  }

  return data;
};

export const deleteEmployee = async (url: string | URL | Request ) => {
  const value = await AsyncStorage.getItem("accessToken");
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${value}`,
    },
  });

  const data = await response.json();

  if (data.message) {
    console.log(data.message);
    return;
  }

  console.log(data);
  return data;
};

export const logout = async (url: string | URL | Request) => {
  const accessToken = await AsyncStorage.removeItem("accessToken");
const response = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

if (!response.ok) {
  console.log("Failed to get employees");
}

const data = await response.json();
return data;
};