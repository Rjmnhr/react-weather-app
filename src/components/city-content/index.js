import { useApplicationContext } from "../../context/app-context";
import { CustomTagStyled } from "./style";

import { message } from "antd";

export const CustomTag = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { selectedCities, setSelectedCities, setUpdatedCity, updatedCity } =
    useApplicationContext();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "city added",
    });
  };

  const addCity = (city) => {
    success();

    let data = [...selectedCities, city];

    setSelectedCities(data);
    removeCity(city.id);
  };

  const removeCity = (id) => {
    let update = updatedCity.filter((item) => item.id !== id);
    setUpdatedCity(update);
  };
  const { cityList } = props;

  return (
    <>
      <CustomTagStyled>
        {cityList.map((item) => {
          return (
            <p>
              {contextHolder}
              <span>{item.name}</span>
              <span
                onClick={() => addCity(item)}
                className="Add"
                style={{ fontSize: "20px" }}
              >
                +
              </span>
            </p>
          );
        })}
      </CustomTagStyled>
    </>
  );
};
