import React from "react"
import cardlogo from "../../public/images/card-logo.svg"
import flight from "../../public/images/arrow-up-right.svg"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import edit from "../../public/images/edit.svg"
import award from "../../public/images/Award.svg"
import octigongoal from "../../public/images/octicon_goal-16.svg"
import GRAPH from "../../public/images/Graph.svg"

const Cards = () => {
  return (
    <section className="cards-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-heading">Total Balance</h5>
              </div>
              <div className="card-body">
                <div className="card-body-one">
                  <h2 className="h2">$240,399</h2>
                  <p>All Accounts</p>
                </div>
                <div className="pink-container">
                  <div className="pink-left">
                    <p>Account type</p>
                    <h5>Debit Card</h5>
                    <p>**** **** **** 2598</p>
                  </div>
                  <div className="pink-right">
                    <img src={cardlogo} alt="" />
                    <div className="pink-right-div">
                      <h5>$25000</h5>

                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          backgroundColor: "white"
                        }}
                      >
                        <img style={{ width: "16px", height: "16px", marginLeft: "0" }} src={flight} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <p>
                    {" "}
                    <IoIosArrowBack /> Previous
                  </p>
                  <div className="bars">
                    <div style={{ background: "#299D91" }} className="bar-line"></div>
                    <div className="bar-line"></div>
                    <div className="bar-line"></div>
                  </div>
                  <p style={{ color: "#191919", cursor: "pointer" }}>
                    Next <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2  */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="card mt-md-0 mt-4">
              <div className="card-header">
                <h5 className="card-heading">Goals</h5>
              </div>
              <div className="card-body">
                <div className="card-body-one">
                  <h2 className="h2 d-flex ">
                    $20,000
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#D2D2D240"
                      }}
                    >
                      <img style={{ width: "16px", height: "16px" }} src={edit} alt="" />
                    </div>
                  </h2>
                  <p>May, 2023</p>
                </div>
                <div className="meter-container">
                  <div className="meter-left">
                    <div className="meter-left-data">
                      <img src={award} alt="" />
                      <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
                        <p>Target Achieved</p>
                        <h5>$12,500</h5>
                      </div>
                    </div>
                    <div className="meter-left-data">
                      <img src={octigongoal} alt="" />
                      <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
                        <p>This month Target</p>
                        <h5>$20,000</h5>
                      </div>
                    </div>
                  </div>
                  <div className="meter-right">
                    <img src={GRAPH} alt="" />
                    <p>Target vs Achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
            <div className="card mt-lg-0 mt-5">
              <div style={{ display: "flex", alignItems: "center" }} className="card-header">
                <h5 className="card-heading">Upcoming Bill</h5>
                <button className="border-0">
                  <p>
                    View All <IoIosArrowForward />{" "}
                  </p>
                </button>
              </div>
              <div className="card-body">
                <div className="bills-box">
                  <div className="bills-box-left">
                    <div className="dates">
                      <div>
                        <p>May</p>
                        <h1>15</h1>
                      </div>
                    </div>
                    <div className="bills-box-data">
                      <h2>Odoo - Monthly</h2>
                      <p>Last Charge - 14 May, 2022</p>
                    </div>
                  </div>
                  <div className="bills-box-right">
                    <h1>$150</h1>
                  </div>
                </div>
                <div className="bills-box">
                  <div className="bills-box-left">
                    <div className="dates">
                      <div>
                        <p>June</p>
                        <h1>16</h1>
                      </div>
                    </div>
                    <div className="bills-box-data">
                      <h2>M365 - Yearly</h2>
                      <p>Last Charge - 17 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="bills-box-right">
                    <h1>$559</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
