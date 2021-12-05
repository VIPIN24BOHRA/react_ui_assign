import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as LeftArrow } from "../../utilities/leftArrow.svg";
import "./Verify.css";
export default function Verify() {
  const Navigate = useNavigate();
  return (
    <div className="verify">
      <LeftArrow
        className="leftArrow"
        onClick={() => {
          Navigate("/user");
        }}
      />
      <h3>Verify your email</h3>
      <p>A verification code has been sent to abc@gmail.com</p>
      <form className="signup_form">
        <label>
          Verification Code
          <input
            type="text"
            placeholder="6 digit verification code"
            name="OTP"
          ></input>
        </label>
        <p>
          Didn't receive the Code?{" "}
          <Link to="#" className="link">
            Resend
          </Link>
        </p>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert("email verified please login");
          }}
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}
