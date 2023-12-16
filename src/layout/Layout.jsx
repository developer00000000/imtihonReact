import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(true);
  const navigate = useNavigate();
  const { isDark, setDark } = useContext(AppContext);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  return (
    <div className={isDark && "dark"}>
      <div className={`container`}>
        <Navbar changeMenu={setOpen} />
        <div className="sides">
          <SideBar isMenuOpen={isOpen} />
          {/* <div className="children">{children}</div> */}
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
