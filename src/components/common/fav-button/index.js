import { useEffect } from "react";
import { message } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useApplicationContext } from "../../../context/app-context";

export const FavButton = () => {
  const {
    favoriteList,
    setFavoriteList,
    selectedFavTab,
    setSelectedFavTab,
    showDetails,
    setShowDetails,
  } = useApplicationContext();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const storedIsFavorite = sessionStorage.getItem(
      JSON.stringify("isFavorite")
    );
    if (storedIsFavorite !== null) {
      setSelectedFavTab(storedIsFavorite);
    }
  }, [setSelectedFavTab]);

  const addFavorite = (city) => {
    setShowDetails([city]);
    if (!favoriteList.includes(city)) {
      let updated = [...favoriteList, city];
      setFavoriteList(updated);
      const action = `${city.name} is added to favorites`;
      success(action);

      selectedFavTab.push(city.id);
      setSelectedFavTab(selectedFavTab);
      sessionStorage.setItem("isFavorite", JSON.stringify(selectedFavTab));
    } else {
      setFavoriteList(favoriteList.filter((fav) => fav !== city));
      const action = `${city.name} is removed from favorites`;
      success(action);

      let data = selectedFavTab.filter((item) => item !== city.id);

      setSelectedFavTab(data);
      sessionStorage.setItem("isFavorite", JSON.stringify(selectedFavTab));
    }
  };
  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  return (
    <>
      {contextHolder}
      {showDetails.map((item) => {
        return (
          <>
            <p onClick={() => addFavorite(item)}>
              {selectedFavTab.find((city) => city === item.id) ? (
                <StarFilled />
              ) : (
                <StarOutlined />
              )}
            </p>
          </>
        );
      })}
    </>
  );
};
