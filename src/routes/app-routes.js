import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommonLayout } from "../components/layout/common-layout";
import Header from "../components/header";
import { Home } from "../pages/home";
import { Cities } from "../pages/cities";
import { useApplicationContext } from "../context/app-context";
import { RouteStyled } from "./style";

export const AppRoutes = () => {
  const { theme, selectedCities } = useApplicationContext();
  return (
    <div className="AppRoutes">
      <RouteStyled theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="container">
                    <CommonLayout />
                    <div className="right-container">
                      <Header />
                      <Home />
                    </div>
                  </div>
                </>
              }
            />

            <Route
              path="/cities"
              element={
                <>
                  <div className="container">
                    <CommonLayout />
                    <div className="right-container">
                      <Cities citiesSelected={selectedCities} />
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <h1>Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </RouteStyled>
    </div>
  );
};
