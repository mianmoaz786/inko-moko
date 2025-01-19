import React from "react"
import housing from "../../public/images/Housing.svg"
import food from "../../public/images/Food.svg"
import lunch from "../../public/images/Trasnport.svg"
import movie from "../../public/images/Movie.svg"
import shopping from "../../public/images/Shopping.svg"
import others from "../../public/images/Others.svg"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoArrowUpOutline } from "react-icons/io5"
import { MdArrowDownward } from "react-icons/md"

const Expenses = () => {
  return (
    <section className="expense-container ">
      <div className="expense-header">
        <h1>Expenses Breakdown</h1>
        <p>*Compare to last month</p>
      </div>
      <div className="expense-box ">
        <div style={{ borderBottom: "1px  solid rgb(251,251,251)" }} className="expense-box-bar  ">
          <div style={{ borderRight: "1px  solid rgb(251,251,251)" }} className="col-4 ">
            <div className="expense-box-bar-img">
              <img src={housing} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>Housing</p>
              <h5>
                $2500.00{" "}
                <span>
                  <FaArrowRightLong style={{ color: "#299D91", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                15%* <IoArrowUpOutline style={{ color: "#E73D1C", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
          {/* 2  */}
          <div style={{ borderRight: "1px solid rgb(251,251,251)" }} className="col-4">
            <div className="expense-box-bar-img">
              <img src={food} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>salaries</p>
              <h5 style={{ gap: "1.6rem" }}>
                $350.00{" "}
                <span>
                  <FaArrowRightLong style={{ color: "#9F9F9F", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                25%* <MdArrowDownward style={{ color: "#4DAF6E", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
          {/* 3  */}
          <div className="col-4">
            <div className="expense-box-bar-img">
              <img src={lunch} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>lunch</p>
              <h5 style={{ gap: "2.3rem" }}>
                $50.00{" "}
                <span>
                  <FaArrowRightLong style={{ color: "#9F9F9F", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                12%* <MdArrowDownward style={{ color: "#4DAF6E", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
        </div>
        <div className="expense-box-bar mt-md-0 mt-3">
          {/* 1  */}
          <div style={{ borderRight: "1px  solid rgb(251,251,251)" }} className="col-4">
            <div className="expense-box-bar-img">
              <img src={movie} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>electricity</p>
              <h5 style={{ gap: "2.1rem" }}>
                $80.00{" "}
                <span className="">
                  <FaArrowRightLong style={{ color: "#9F9F9F", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                15%* <MdArrowDownward style={{ color: "#4DAF6E", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
          {/* 2  */}
          <div style={{ borderRight: "1px solid rgb(251,251,251)" }} className="col-4">
            <div className="expense-box-bar-img">
              <img src={shopping} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>salaries</p>
              <h5>
                $4200.00{" "}
                <span>
                  <FaArrowRightLong style={{ color: "#299D91", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                25%* <IoArrowUpOutline style={{ color: "#E73D1C", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
          {/* 3  */}
          <div className="col-4">
            <div className="expense-box-bar-img">
              <img src={others} alt="" />
            </div>
            <div className="expense-box-bar-content">
              <p>trips</p>
              <h5>
                $6500.00{" "}
                <span>
                  <FaArrowRightLong style={{ color: "#299D91", width: "24px", height: "24px" }} />
                </span>
              </h5>
              <p>
                {" "}
                23%* <IoArrowUpOutline style={{ color: "#E73D1C", width: "16px", height: "16px" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expenses
