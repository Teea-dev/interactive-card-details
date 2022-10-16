import React, { useState } from "react";

import cardfront from "./images/bg-card-front.png";
import cardback from "./images/bg-card-back.png";

import Details from "./components/Details/Details";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANET APPLESEED");
  const [date, setDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="top col-md-6">
          <div className="wrapper">
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
        <div className=" col-md-6 details-section">
          <div className="login-section">
            {submitted ? (
              <Details />
            ) : (
              <>
                <Form
                  setCvc={setCvc}
                  setDate={setDate}
                  setNumber={setNumber}
                  setName={setName}
                  setSubmitted={setSubmitted}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
