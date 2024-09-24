import { Text, Pressable, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@/lib/config";
import Error from "../Error";

const DeleteButton = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (id: string) => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("accessToken");
      const response = await fetch(`${BASE_URL}/employees/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${value}`,
        },
      });

      const data = await response.json();

      if (data.message) {
        setError(data.message);
        return;
      }

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      {error && <Error error={error} />}
      <Pressable onPress={() => submit(id)}>
        <Text
          className={`py-2 px-4 rounded-md ${
            isLoading ? "bg-red-900 text-red-200" : "bg-red-700 text-red-100"
          }  text-2xl `}
        >{`${isLoading ? "Deleting..." : "Delete"}`}</Text>
      </Pressable>
    </View>
  );
};

export default DeleteButton;
