import { Input, Modal } from "antd";
import { useState } from "react";

import { HomeModalStyled } from "./style";

import { useApplicationContext } from "../../../context/app-context";
import { CustomTag } from "../../city-content";

const CityListHomeModal = () => {
  const { Search } = Input;
  const [modal2Open, setModal2Open] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { updatedCity } = useApplicationContext();
  const searchFilter = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return updatedCity.filter((city) => {
      return city.name.toLowerCase().includes(lowerCaseSearchTerm);
    });
  };

  const handleSearch = (event) => {
    let { value } = event.target;
    setSearchTerm(value);
  };

  const SearchFiltered = searchTerm ? searchFilter(searchTerm) : updatedCity;

  return (
    <>
      <HomeModalStyled>
        <button onClick={() => setModal2Open(true)}>Add new city</button>
        <Modal
          bodyStyle={{ height: 400, overflow: "auto" }}
          className="modal"
          centered
          title="Cities"
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Search
              onChange={handleSearch}
              value={searchTerm}
              style={{
                width: "450px",
                margin: "10px",
              }}
              placeholder="search"
              loading
            />
          </div>

          {SearchFiltered.length > 0 ? (
            <CustomTag cityList={SearchFiltered} />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "50px",
              }}
            >
              No such city Found
            </div>
          )}
        </Modal>
      </HomeModalStyled>
    </>
  );
};
export default CityListHomeModal;
