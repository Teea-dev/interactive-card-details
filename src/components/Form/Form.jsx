import React from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        props.setName(e.target.value);
        break;
      case "number":
        props.setNumber(e.target.value);
        break;
      case "date":
        props.setDate(e.target.value);
        break;
      case "cvc":
        props.setCvc(e.target.value);
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
    <>
      <form
        onSubmit={handleSubmit((e) => {
          // e.preventDefault();
          props.setSubmitted(true);
        })}
      >
        <div className="input">
          <label for="email"> cardholder name</label>
          <input
            {...register("name", { required: `Can't be blank` })}
            className="input-field"
            type="text"
            name="name"
            id="email"
            placeholder="e.g Jane Appleseed"
            onChange={handleChange}
          />
          <p className="error-messages"> {errors.name?.message}</p>
        </div>
        <div className="input">
          <label for="password"> card number</label>
          <input
            {...register("number", {
              required: true,
              maxLength: 16,
              pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format. numbers only",
              },
            })}
            className="input-field"
            type="number"
            name="number"
            id="password"
            // value={forValues.password}
            placeholder="e.g 1234 5678 9123 0000"
            onChange={handleChange}
          />
          {errors.number && errors.number.type === "required" && (
            <p className="error-messages">can't be blank</p>
          )}
          {errors.number && errors.number.type === "maxLength" && (
            <p className="error-messages">maximum length exceeded</p>
          )}
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
              {...register("cvc", { required: true, maxLength: 3 })}
              type="year"
              name="cvc"
              className="input-cvc"
              onChange={handleChange}
            />
            {errors.cvc && errors.cvc.type === "required" && (
              <p className="error-messages">can't be blank</p>
            )}
            {errors.cvc && errors.cvc.type === "maxLength" && (
              <p className="error-messages">maximum length exceeded</p>
            )}
          </div>
        </div>

        <button type="submit" className="button">
          <h3>Confirm</h3>
        </button>
      </form>
    </>
  );
};
export default Form;
