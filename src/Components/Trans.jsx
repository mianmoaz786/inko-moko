import React from "react"
import { IoIosArrowForward } from "react-icons/io"
import gamepad from "../../public/images/gamepad-2.svg"
import shopping from "../../public/images/Shopping.svg"
import food from "../../public/images/Food.svg"
import transport from "../../public/images/Trasnport.svg"

const Trans = () => {
  return (
    <section className="trans-container">
      <div className="trans-header">
        <h1 className="h1-trans">Recent Transaction</h1>
        <button className="border-0">
          {" "}
          <p>
            View All <IoIosArrowForward />{" "}
          </p>
        </button>
      </div>
      <div className="trans-box">
        <div className="menu-tab">
          <li className="all">All</li>
          <li className="revenue">Revenue</li>
          <li className="expenses">Expenses</li>
        </div>
        <div className="tran-items">
          <div className="trans-items-left">
            <div className="trans-items-left-img">
              <img src={gamepad} alt="" />
            </div>
            <div className="trans-items-left-content">
              <h5>Profit</h5>
              <p>Gadget & Gear</p>
            </div>
          </div>
          <div className="trans-items-right">
            <h4>$16000.00</h4>
            <p>17 May 2023</p>
          </div>
        </div>
        {/* 2 */}
        <div className="tran-items">
          <div className="trans-items-left">
            <div className="trans-items-left-img">
              <img src={shopping} alt="" />
            </div>
            <div className="trans-items-left-content">
              <h5>Grant</h5>
              <p>XL fashions</p>
            </div>
          </div>
          <div className="trans-items-right">
            <h4>$20000.00</h4>
            <p>17 May 2023</p>
          </div>
        </div>
        {/* 3  */}
        <div className="tran-items">
          <div className="trans-items-left">
            <div className="trans-items-left-img">
              <img src={food} alt="" />
            </div>
            <div className="trans-items-left-content">
              <h5>salaries</h5>
              <p>Hajir Biriyani</p>
            </div>
          </div>
          <div className="trans-items-right">
            <h4>$10000.00</h4>
            <p>17 May 2023</p>
          </div>
        </div>
        {/* 4  */}
        <div className="tran-items">
          <div className="trans-items-left">
            <div className="trans-items-left-img">
              <img src={transport} alt="" />
            </div>
            <div className="trans-items-left-content">
              <h5>lunch</h5>
              <p>Uber</p>
            </div>
          </div>
          <div className="trans-items-right">
            <h4>$12000.00</h4>
            <p>17 May 2023</p>
          </div>
        </div>
        {/* 5  */}
        <div className="tran-items">
          <div className="trans-items-left">
            <div className="trans-items-left-img">
              <img src={shopping} alt="" />
            </div>
            <div className="trans-items-left-content">
              <h5>laptops</h5>
              <p>Gadget & Gear</p>
            </div>
          </div>
          <div className="trans-items-right">
            <h4>$12000.00</h4>
            <p>17 May 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trans
