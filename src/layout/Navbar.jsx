import React, { useContext, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import YouTube from "../foto/headerIcons/Black.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdViewCompact } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import User from "../foto/headerIcons/Userpic.svg";
import { useNavigate } from "react-router-dom";
import YouTubeBlack from "../foto/headerIcons/Blacklogo.svg";

import { AppContext } from "../App";

export default function Navbar({ changeMenu }) {
  const inputRef = useRef(null);
  const goPage = useNavigate();
  const { isDark, setIsDark } = useContext(AppContext);

  function Submit() {
    console.log("SUBMIT");
    if (inputRef.current.value.length > 0) {
      console.log("Nimadir");
      goPage("/search?search_value=" + inputRef.current.value);
    }
  }

  return (
    <header  className={isDark && "nav-dark"}>
      <nav>
        <div className="navLeft">
          <CiMenuBurger className="burgerBtn" onClick={() => changeMenu((state) => !state)} />
          {isDark? <img src={YouTubeBlack} alt="logo" onClick={() => goPage("/home")}/> : <img src={YouTube} onClick={() => goPage("/home")}/>}
        </div>
        <div className="navSearch">
          <input ref={inputRef} type="text" placeholder="Search" />
          <IoSearchOutline onClick={() => Submit()} />
        </div>
        <div className="navRight">
          <FiVideo className="chiroq none" />
          <MdViewCompact className="chiroq none" />
          <CiSun className="chiroq" onClick={() => setIsDark(!isDark)}/>
          <img src={User} alt="k" />
        </div>
      </nav>
    </header>
  );
}
