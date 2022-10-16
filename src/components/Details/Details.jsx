import React from "react";
import Thanks from "../../images/icon-complete.svg";
export const Details = () => {
  return (
    <>
      <img src={Thanks} alt="" srcset="" width="100px" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button type="submit" className="button">
        <h3>Continue</h3>
      </button>
    </>
  );
};

export default Details;
