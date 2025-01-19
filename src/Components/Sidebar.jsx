import React from "react";
import overview from "../../public/images/Overview.svg";
import projects from "../../public/images/wallet.svg";
import transaction from "../../public/images/Transaction.svg";
import bills from "../../public/images/Bill.svg";
import expenses from "../../public/images/Expencces.svg";
import logout from "../../public/images/Logout.svg";
import goals from "../../public/images/Goal.svg";
import settings from "../../public/images/Settings.svg";
import { GiTireIronCross } from "react-icons/gi";


const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
      <GiTireIronCross />
      </button>
      <div className="logo-menu">
        <div className="logo">
          <p>
            INKO <span>MOKO.</span>
          </p>
        </div>
        <div className="menu">
          <button className="overview">
            <img src={overview} alt="" /> Overview
          </button>
          <button>
            <img src={projects} alt="" /> Projects
          </button>
          <button>
            <img src={transaction} alt="" /> Transactions
          </button>
          <button>
            <img src={bills} alt="" /> Bills
          </button>
          <button>
            <img src={expenses} alt="" /> Expenses
          </button>
          <button>
            <img src={goals} alt="" /> Goals
          </button>
          <button>
            <img src={settings} alt="" /> Settings
          </button>
        </div>
      </div>
      <div className="logout-btn">
        <button>
          <img src={logout} alt="" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
