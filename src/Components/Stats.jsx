import React from "react"
// import { MdKeyboardArrowDown } from "react-icons/md";
import statsgraph from "../../public/images/statistic-graph.svg"

const Stats = () => {
  return (
    <section className="stats-container">
      <div className="stats-header">
        <h1>Statistics</h1>
      </div>
      <div className="stats-box">
        <div className="stats-box-header">
          <div className="stats-box-header-left ">
            <select style={{ outline: "none", border: "none" }}>
              <option style={{ outline: "none", border: "none" }}>Weekly Comparison</option>
              <option style={{ outline: "none", border: "none" }}>Monthly Comparison</option>
              <option style={{ outline: "none", border: "none" }}>Yearly Comparison</option>
            </select>
            {/* <MdKeyboardArrowDown style={{width:"24px",height:"24px"}}/> */}
          </div>
          <div className="stats-box-header-right">
            <div className="stats-box-header-right-item">
              <div></div>
              <p>This week</p>
            </div>
            <div className="stats-box-header-right-item">
              <div style={{ backgroundColor: "#E8E8E8" }}></div>
              <p>Last week</p>
            </div>
          </div>
        </div>
        <div className="stats-img">
          <img src={statsgraph} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Stats
