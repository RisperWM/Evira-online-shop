import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import { ImCart } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="logoText">Naras Shop</p>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink exact to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" activeClassName="active">
            MEDIA
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" activeClassName="active">
            FEATURES
          </NavLink>
        </li>
        <li>
          <IoSearchSharp size={25} />
        </li>
        <li>
          <NavLink to="/account">
            <RiUserLine size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/like">
            <GoHeartFill size={25} color="red" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <ImCart size={25} color="orange" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
