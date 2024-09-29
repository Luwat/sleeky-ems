import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      setIsLoading(true);
      const accessToken = await AsyncStorage.getItem("accessToken")
      setToken(accessToken);
      setIsLoading(false);
    };
  
    getToken()
  }, [])

  return {
    isLoading,
    token
  }
}