import { useContext, useState } from "react";
import { createContext } from "react";
import { ListOfCities } from "../components/cityLists";

export const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [theme, setTheme] = useState("light");
  const [updatedCity, setUpdatedCity] = useState(ListOfCities);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedFavTab, setSelectedFavTab] = useState([]);
  const [showDetails, setShowDetails] = useState([]);
  const value = {
    selectedCities,
    setSelectedCities,
    theme,
    setTheme,
    updatedCity,
    setUpdatedCity,
    favoriteList,
    setFavoriteList,
    isFavorite,
    setIsFavorite,
    selectedFavTab,
    setSelectedFavTab,
    showDetails,
    setShowDetails,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};
