import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Token, IProps, tokenProps } from "./definitions";


const removedToken: void = undefined

const GlobalContext = createContext<tokenProps>({} as tokenProps);
export const useGlobalContext = () => {
  const useRedirect = useContext(GlobalContext);

  if (!useRedirect) {
    throw new Error("useRedirect must be used within a GlobalContextProvider");
  }

  return useRedirect;
};

const GlobalContextProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<Token>({
    get: "",
    remove: removedToken
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        setIsLoading(true);
        const response = await token;
        if (response.get) {
          setIsLoggedIn(true);
          return setAccessToken({
            get: response.get,
          });
        } else if (!response.get) {
          setIsLoggedIn(false);
          return setAccessToken({
            remove: response.remove,
          });
        }
      } catch (error) {
        error;
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  }, []);

  const token = (async () => {
    const get = await AsyncStorage.getItem("accessToken");

    const remove = await AsyncStorage.removeItem("accessToken");

    return {
      get,
      remove,
    };
  })();

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        accessToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
