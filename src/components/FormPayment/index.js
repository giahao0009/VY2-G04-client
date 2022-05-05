import React, { useEffect, useState } from "react";
import Chip from "../../images/chip.png";
import Visa from "../../images/visa.png";

function FormPayment() {
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    let currentYear = new Date().getFullYear();
    for (let i = 1950; i <= currentYear; ++i) {
      setYears((year) => [...year, i]);
    }
    for (let i = 1; i <= 12; ++i) {
      setMonths((month) => [...month, i]);
    }
  }, []);

  const cardNumberOnChange = (e) => {
    let result = Number(e.target.value);
    if (typeof result === "number") {
      document.querySelector(".card-number-box").innerText = result;
    } else if (!typeof result === "number") {
      document.querySelector(".card-number-box").innerText = "################";
    }
    if (!e.target.value) {
      document.querySelector(".card-number-box").innerText = "################";
    }
  };

  const cardHolderOnChange = (e) => {
    document.querySelector(".card-holder-name").innerText = e.target.value;
    if (!e.target.value) {
      document.querySelector(".card-holder-name").innerText = "Full name";
    }
  };

  const cardMonthOnChange = (e) => {
    document.querySelector(".exp-month").innerText = e.target.value;
    if (!e.target.value) {
      document.querySelector(".exp-month").innerText = "mm";
    }
  };

  const cardYearOnChange = (e) => {
    document.querySelector(".exp-year").innerText = e.target.value;
    if (!e.target.value) {
      document.querySelector(".exp-year").innerText = "yy";
    }
  };

  const cardCvvOnMouseEnter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  const cardCvvOnMouseOver = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };

  const cardCvvOnChange = (e) => {
    document.querySelector(".cvv-box").innerText = e.target.value;
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="front">
          <div className="image">
            <img src={Chip} alt="chip" />
            <img src={Visa} alt="chip" />
          </div>
          <div className="card-number-box">################</div>
          <div className="flexbox">
            <div className="box">
              <span>Card holder</span>
              <div className="card-holder-name">Full name</div>
            </div>
            <div className="box">
              <span>expiration</span>
              <div className="expiration">
                <span className="exp-month">mm</span>
                {"/"}
                <span className="exp-year">yy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box"></div>
            <img src={Visa} alt="Visa"></img>
          </div>
        </div>
      </div>
      <form className="form-payment">
        <div className="inputBox">
          <span>Card number</span>
          <input
            type="text"
            maxLength="16"
            className="card-number-input"
            onChange={(e) => cardNumberOnChange(e)}
          />
        </div>
        <div className="inputBox">
          <span>Card holder</span>
          <input
            type="text"
            maxLength="16"
            className="card-holder-input"
            onChange={(e) => cardHolderOnChange(e)}
          />
        </div>
        <div className="flexBox">
          <div className="inputBox">
            <span>Expiration mm</span>
            <select
              name=""
              id=""
              className="month-input"
              onChange={(e) => cardMonthOnChange(e)}
            >
              <option value="month" selected disabled>
                Month
              </option>
              {months.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputBox">
            <span>Expiration yy</span>
            <select
              name=""
              id=""
              className="year-input"
              onChange={(e) => cardYearOnChange(e)}
            >
              <option value="year" selected disabled>
                Year
              </option>
              {years.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputBox">
            <span>CVV</span>
            <input
              type="text"
              maxLength="4"
              className="cvv-input"
              onMouseEnter={() => cardCvvOnMouseEnter()}
              onMouseLeave={() => cardCvvOnMouseOver()}
              onChange={(e) => cardCvvOnChange(e)}
            />
          </div>
        </div>
        <input type="submit" value="submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default FormPayment;
