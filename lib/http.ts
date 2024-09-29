import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmployeesData } from "./definitions";
import { formSchema } from "./config";

const getToken = async () => await AsyncStorage.getItem("accessToken");
// const removeToken = async () => await AsyncStorage.removeItem("accessToken");

export const fetchEmployees = async (url: string | URL | Request) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
  });

  const data = await response.json();
  return data;
};

export const fetchEmployee = async (url: string | URL | Request) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    
    const data = await response.json();

    if (data.error) {
      throw new Error(data.message)
    }

    return data;
  } catch(error:any) {
    throw new Error(error.message)
  }
};

export const createEmployees = async (
  url: string | URL | Request,
  { arg }: { arg: EmployeesData }
) => {
  const parsedFormData = formSchema.parse(arg);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify(parsedFormData),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.message)
  }

  return data;
};

export const updateEmployee = async (
  url: string | URL | Request,
  { arg }: { arg: EmployeesData }
) => {
  const parsedFormData = formSchema.parse(arg);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify(parsedFormData),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.message)
  }

  return data;
};

export const deleteEmployee = async (url: string | URL | Request ) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    });
  
    const data = await response.json();
  
    if (data.error) {
      throw new Error(data.message)
    }
  
    return data;
  } catch(error:any) {
    throw new Error(error.message)
  }
};