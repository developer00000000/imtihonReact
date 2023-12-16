import React, { useContext} from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { AppContext } from "../App";


export default function Footer() {
  const { isDark, setIsDark } = useContext(AppContext);

  return (
    <footer className={isDark && "nav-dark"} >
        <div className='footer'>
        <ul>
          <NavLink className={`link `} to='/home'><li><IoHomeOutline /> <span>Home</span></li></NavLink>
            <NavLink className={`link `} to='/trend'><li> <SlFire /> <span>Trending</span></li></NavLink>
            <NavLink className={`link `} to='/subscription'><li> <MdOutlineSubscriptions /> <span>Subscriptions</span></li></NavLink>
            <NavLink className={`link `} to='/library'><li><GoFileDirectory /> <span>Library</span></li></NavLink>
          </ul>
        </div>

    </footer>
  )
}
