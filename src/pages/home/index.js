import { useApplicationContext } from "../../context/app-context";
import { HomeStyled } from "./style";

export const Home = () => {
  const { theme, favoriteList } = useApplicationContext();

  return (
    <>
      <div className="home">
        <HomeStyled theme={theme}>
          {favoriteList.length > 0 ? (
            <div className="home-page-container">
              {favoriteList.map((item) => {
                return (
                  <div className="content-block-container">
                    <div className="title-container">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h3 style={{ margin: "0", padding: "0" }}>
                          {item.name.toUpperCase()}
                        </h3>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "green",
                        margin: "0",
                        padding: "0",
                        fontWeight: "normal",
                      }}
                    >
                      Clear with periodic clouds
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      Temperature : {item.temp}
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      Humidity : {item.humidity}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="not-selected">
              <p>You have not selected any favorite city</p>
            </div>
          )}
        </HomeStyled>
      </div>
    </>
  );
};
