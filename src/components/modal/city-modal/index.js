import { Input, Modal } from "antd";
import { useState } from "react";

import { ModalStyledCity } from "./style";
import { useApplicationContext } from "../../../context/app-context";
import { CustomTag } from "../../city-content";

const CityListModal = () => {
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
      <ModalStyledCity>
        <button onClick={() => setModal2Open(true)}>+</button>
        <Modal
          bodyStyle={{ height: 400, overflow: "auto" }}
          className="modal"
          title="Cities"
          centered
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
      </ModalStyledCity>
    </>
  );
};
export default CityListModal;
