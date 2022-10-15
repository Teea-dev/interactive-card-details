import React, { useState } from "react";

import mobilebackground from "./images/bg-main-mobile.png";
import cardfront from "./images/bg-card-front.png";
import cardback from "./images/bg-card-back.png";
import desktopbackground from "./images/bg-main-desktop.png";
import { useForm } from "react-hook-form";
import Details from "./Details";

import "./App.css";

function App() {
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANET APPLESEED");
  const [date, setDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "cvc":
        setCvc(e.target.value);
        break;
      default:
        break;
    }
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className=" col-sm-6 top">
              <img
                className="desktop d-none d-md-block"
                src={desktopbackground}
                alt=""
              />
              <img
                className="mobile d-block d-md-none"
                src={mobilebackground}
                alt=""
              />
            </div>

            <div className=" col-sm-6 card-container ">
              {/* <img src={logo} width='30px' /> */}
              <img src={cardfront} className="cardfront" alt="" width="300px" />
              <div className="card-num">{number}</div>
              <span className="card-name">
                <h2>{name} </h2>
              </span>
              <span className="exp-date">
                <h3>{date}</h3>
              </span>

              <img src={cardback} className="cardback" alt="" width="300px" />
              <span className="cvc">
                <h3>{cvc}</h3>
              </span>
            </div>
          </div>
        </div>
        <div className=" col-sm-6 details-section">
          <div className="login-section">
              {submitted ?(
                <Details/> 
              ): 
              <>
            <form
              onSubmit={handleSubmit((e) => {
                // e.preventDefault();
                setSubmitted(true);
              })}
            >
              <div className="input">
                <label for="email"> cardholder name</label>
                <input
                  {...register("name")}
                  className="input-field"
                  type="text"
                  name="name"
                  id="email"
                  // value={forValues.email}
                  placeholder="e.g Jane Appleseed"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label for="password"> card number</label>
                <input
                  {...register("number", {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Wrong format. numbers only",
                    }
                  })}
                  className="input-field"
                  type="text"
                  name="number"
                  id="password"
                  // value={forValues.password}
                  placeholder="e.g 1234 5678 9123 0000"
                  onChange={handleChange}
                />
                <p className="error-messages">{errors.number?.message}</p>
              </div>
              <div className="  d-flex">
                <div className=" ">
                  <label> exp. date(mm/yy)</label> <br />
                  <input
                    {...register("date", { required: `can't be blank` })}
                    type="month"
                    className=""
                    name="date"
                    onChange={handleChange}
                  />
                  <p className="error-messages">{errors.date?.message}</p>
                </div>
                <div className="cvc-input ">
                  <label> cvc</label> <br />
                  <input
                    {...register("cvc", { required: `can't be blank` })}
                    type="year"
                    name="cvc"
                    className="input-cvc"
                    onChange={handleChange}
                  />
                  <p className="error-messages">{errors.cvc?.message}</p>
                </div>
              </div>

              <button type="submit" className="button">
                <h3>Confirm</h3>
              </button>
            </form>
              </>
              }
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default App;
