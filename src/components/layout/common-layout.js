import SideBar from "../sidebar";
import { SideBarTabs } from "../constants";

export const CommonLayout = () => {
  return (
    <>
      <SideBar sidebarTabs={SideBarTabs} />
    </>
  );
};
