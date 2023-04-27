import CityListModal from "../../components/modal/city-modal";
import { CityStyled } from "./style";
import { useApplicationContext } from "../../context/app-context";
import { useEffect, useState } from "react";

import { DeleteOutlined } from "@ant-design/icons";
import { FavButton } from "../../components/common/fav-button";

export const Cities = (props) => {
  const { theme } = useApplicationContext();
  const { citiesSelected } = props;
  const {
    selectedCities,
    setSelectedCities,
    setUpdatedCity,
    updatedCity,
    showDetails,
    setShowDetails,
  } = useApplicationContext();

  const [selectedTab, setSelectedTab] = useState("");

  const remove = (city) => {
    let filtered = selectedCities.filter((item) => item.id !== city.id);
    setSelectedCities(filtered);

    updatedCity.splice(2, 0, city);

    setUpdatedCity(updatedCity);
  };

  const showContent = (city) => {
    setShowDetails([city]);
    showActive(city.name);
    sessionStorage.setItem("selectedCityId", city.id);
  };

  const showActive = (currentTab) => {
    setSelectedTab(currentTab);
  };

  useEffect(() => {
    const selectedCityId = sessionStorage.getItem("selectedCityId");
    if (selectedCityId) {
      const selectedCity = citiesSelected.find(
        (city) => city.id === selectedCityId
      );
      if (selectedCity) {
        setShowDetails([selectedCity]);
        setSelectedTab(selectedCity.name);
      }
    }
  }, [citiesSelected, setShowDetails]);

  return (
    <>
      <CityStyled theme={theme}>
        <div className="cities-container">
          <div className="cities-list">
            <div className="top-bar-container">
              <h3>Cities</h3>
              <div style={{ paddingBottom: "8px" }}>
                <CityListModal />
              </div>
            </div>
            <div className="content-container">
              {selectedCities.length > 0 ? (
                <div>
                  {citiesSelected.map((item) => {
                    return (
                      <>
                        <div
                          onClick={() => showContent(item)}
                          className={
                            selectedTab === item.name
                              ? "city-block-container selected-container"
                              : "city-block-container"
                          }
                        >
                          <div>
                            <p>{item.name}</p>
                            <p>{item.temp}</p>
                          </div>
                          <h4 onClick={() => remove(item)}>
                            <DeleteOutlined />
                          </h4>
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <p style={{ marginLeft: "30px", marginTop: "30px" }}>
                  You have not selected any city
                </p>
              )}
            </div>
          </div>
          {showDetails.length > 0 && (
            <div className="city-content">
              <div className="top-bar-container">
                {showDetails.map((item) => {
                  return (
                    <>
                      <h3>{item.name}</h3>
                      <span style={{ color: "white" }}>
                        <FavButton arr={showDetails} />
                      </span>
                    </>
                  );
                })}
              </div>
              <div className="content">
                <div className="sub-content">
                  {showDetails.map((item) => {
                    return (
                      <>
                        <h3>Clear with periodic clouds</h3>
                        <p>Temperature :{item.temp}</p>
                        <p>Humidity :{item.humidity}</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </CityStyled>
    </>
  );
};
