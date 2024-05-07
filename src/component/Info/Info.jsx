import React from "react";
import "./Info.css";
import { TbBus } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Info = () => {
  return (
    <div className="info">
      <div className="info-type">
        <TbBus size={40} />
        <div className="description">
          <p className="description-title">FREE SHIPPING WORLDWIDE</p>
          <p className="description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="info-type">
        <MdOutlineHeadsetMic size={40} />
        <div className="description">
          <p className="description-title">24/7 CUSTOMER SERVICE</p>
          <p className="description-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="info-type">
        <RiMoneyDollarCircleLine size={40}/>
        <div className="description">
          <p className="description-title">MONEY BACK GUARANTEE</p>
          <p className="description-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
