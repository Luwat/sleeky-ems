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

export const useRefresh = (data: any, mutate: any) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      mutate()
      data
      console.log(data)
      setIsRefreshing(false)
    }, 5000);
  }

  return {
    onRefresh,
    isRefreshing
  }

}