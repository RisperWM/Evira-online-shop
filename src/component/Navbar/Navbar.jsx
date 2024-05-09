import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { ImCart } from "react-icons/im";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="logo">
        <p className="logoText">Evira's Shop</p>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/media"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            MEDIA
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            FEATURES
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
          <button className="signupbtn">
            SIGN UP
          </button>
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
          <NavLink to="/cart">
            <ImCart size={25} color="orange" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
