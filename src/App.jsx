import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import "./assets/sass/index.scss";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`main-container ${isSidebarVisible ? "sidebar-open" : ""}`}>
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <section className="main-wrapper">
        <Main toggleSidebar={toggleSidebar} />
      </section>
    </div>
  );
};

export default App;
