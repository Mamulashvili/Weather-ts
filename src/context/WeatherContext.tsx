import { createContext, useContext, ReactNode, useState } from "react";

type WeatherProviderProps = {
  children: ReactNode
}

type WeatherContextType = {
  data: object;
  setData: (data: object) => void;
}

const initialState = {};
const WeatherContext = createContext(initialState as WeatherContextType);

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [data, setData] = useState<object>({});

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
}