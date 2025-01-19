import React from "react";
import chevron from "../../public/images/chevrons-right.svg";
import notification from "../../public/images/Notification icon.svg";
import search from "../../public/images/search.svg";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav>
      <div className="left">
        <button className="burger-btn" onClick={toggleSidebar}>
        <CgMenuLeft />
        </button>
        <h1>Business</h1>
        <div className="left-arrow-dates">
          <img src={chevron} alt="" />
          <p>May 19, 2023</p>
        </div>
      </div>
      <div className="right">
        <img src={notification} alt="Notifications" />
        <div className="searchbar">
          <input type="text" placeholder="Search here" />
          <img src={search} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
