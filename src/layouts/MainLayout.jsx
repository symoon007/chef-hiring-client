import { Outlet } from "react-router-dom";
import AppBar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet style={{ marginTop: "180px" }} />
    </div>
  );
};

export default MainLayout;
