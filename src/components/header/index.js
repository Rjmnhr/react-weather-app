import { useApplicationContext } from "../../context/app-context";
import CityListHomeModal from "../modal/home-modal";
import HeaderWrapper from "./style";

const Header = () => {
  const { theme } = useApplicationContext();
  return (
    <>
      <HeaderWrapper theme={theme}>
        <div className="left-container">
          <div className="header-container">
            <div>My favorite cities</div>
            <div className="button">
              <CityListHomeModal />
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
