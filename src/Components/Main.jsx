import React from "react"
import Navbar from "./Navbar"
import Cards from "./Cards"
import Trans from "./Trans"
import Stats from "./Stats"
import Expenses from "./Expenses"

const Main = ({ toggleSidebar, isSidebarVisible }) => {
  return (
    <>
      <Navbar  toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
      <div className="px-xl-3 px-0">
        <Cards />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <Trans />
            </div>
            <div className=" col-lg-8">
              <div className="box right-box mb-2 mt-lg-0 mt-4">
                <Stats />
              </div>
              <div className="box right-box mt-xl-4   mt-5">
                <Expenses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
