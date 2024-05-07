import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sect1">
        <div className="column1">
          <div className="logos">
            <p>Nara's Shop</p>
          </div>
          <div className="about">
            <p className="aboutTitle">About Us</p>
            <p className="aboutText">
              We want to help bring talented students and unique startups
              together
            </p>
          </div>
          <div className="contact">
            <p className="contactTitle">Contact Us</p>
            <div className="phone">
              <FaPhoneVolume size={25} color="orange" />
              <p style={{ margin: "0" }}>+25478920299939</p>
            </div>
            <div className="phone">
              <MdEmail
                size={25}
                color="orange"
                style={{ marginBottom: "5px" }}
              />
              <p style={{ marginBottom: "29px", marginTop: "5px" }}>
                narashop@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="column2">
          <h3 className="infoTitle">Information</h3>
          <a href="">About Us</a>
          <a href="">More Search</a>
          <a href="">Blog</a>
          <a href="">Testimonials</a>
          <a href="">Events</a>
        </div>
        <div className="column2">
          <h3 className="infoTitle">Helpful Links</h3>
          <a href="">Services</a>
          <a href="">Supports</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="column4">
          <h3 className="infoTitle">Subscribe More Info</h3>
          <div className="subscribe">
            <input type="email" name="" id="email" placeholder="Enter your email" />
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="icons">
        <div className="iconLink">
        <a href="">
          <FaFacebook size={26} color="orange"/>
        </a>
        <a href="">
          <TfiGoogle size={26} color="orange"/>
        </a>
        <a href="">
          <FaTwitter size={25} color="orange"/>
        </a>
        <a href="">
          <FaInstagram size={26} color="orange"/>
        </a>
        </div>
        <div className="copyright">
        <p> All Copyrights Reserved <FaRegCopyright /> 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
