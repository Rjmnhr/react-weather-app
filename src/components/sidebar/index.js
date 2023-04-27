import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SideBarStyled from "./style";
import { useApplicationContext } from "../../context/app-context";
import { Switch } from "antd";

const SideBar = (props) => {
  const { sidebarTabs } = props;
  const [selectedTab, setSelectedTab] = useState("Home");
  const { theme, setTheme } = useApplicationContext();
  const navigate = useNavigate();
  const Location = useLocation();

  useEffect(() => {
    if (Location.pathname === "/") {
      setSelectedTab("Home");
    } else if (Location.pathname === "/cities") {
      setSelectedTab("Cities");
    }
  }, [Location.pathname, selectedTab]);

  const showActive = (currentTab) => {
    setSelectedTab(currentTab);
    if (currentTab === "Home") {
      navigate("/");
      return;
    }

    let routes = "/" + currentTab.toLowerCase();

    navigate(routes);
  };

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <SideBarStyled theme={theme}>
        <div className="sidebar-container">
          <div className="container-one">
            <div className="title">
              <h2 className="title-content">
                <span
                  onClick={() => showActive("Home")}
                  style={{ color: "violet" }}
                >
                  Weather
                </span>
                App
              </h2>
            </div>
            <div className="menu-container">
              {sidebarTabs.map((item) => {
                return (
                  <button
                    style={{ fontWeight: "bolder" }}
                    className={
                      selectedTab === item.tab
                        ? "Btn-container selected-tab-container"
                        : "Btn-container"
                    }
                    onClick={() => showActive(item.tab)}
                  >
                    {item.tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="theme">
            <p style={{ margin: "0", padding: "0" }}>Dark mode</p>
            <Switch onChange={handleTheme}></Switch>
          </div>
        </div>
      </SideBarStyled>
    </>
  );
};

export default SideBar;
