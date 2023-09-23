import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="max-w-[1320px] mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainLayout;
