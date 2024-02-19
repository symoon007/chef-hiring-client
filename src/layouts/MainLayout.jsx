import { Outlet } from "react-router-dom"
import AppBar from "../components/Header/Navbar"


const MainLayout = () => {
  return (
    <div>
        <AppBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout