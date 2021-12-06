import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { ReactComponent as Eye } from "../../utilities/eye.svg";
import { useRef } from "react";
export default function Signup() {
  const Navigate = useNavigate();
  const password = useRef();
  const cnfPassword = useRef();
  const RegisterUser = (e) => {
    e.preventDefault();
    // do the asychronous task
    // register the user in backend, call the api.
    Navigate("/user/verify");
  };

  return (
    <div className="signup">
      <h3>Create An Account</h3>
      <form className="signup_form">
        <input type="text" placeholder="Enter Mobile" name="mobile"></input>
        <input type="text" placeholder="Enter Email" name="email"></input>
        <div className="input_password">
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            ref={password}
          />
          <Eye
            className="eye_icon"
            onMouseOver={() => {
              password.current.type = "text";
            }}
            onMouseOut={() => {
              password.current.type = "password";
            }}
          />
        </div>
        <div className="input_password">
          <input
            type="password"
            placeholder="Confirm Password"
            name="cnf_password"
            ref={cnfPassword}
          />
          <Eye
            className="eye_icon"
            onMouseOver={() => {
              cnfPassword.current.type = "text";
            }}
            onMouseOut={() => {
              cnfPassword.current.type = "password";
            }}
          />
        </div>

        <label>
          <input type="checkbox" name="eligible" value="eligible" /> I hereby
          confirm that I am above 18 years Old.
        </label>
        <button type="submit" onClick={(e) => RegisterUser(e)}>
          Verify OTP
        </button>
        <p className="para">
          By creating this account, you agree to our
          <Link to="#" className="link">
            Private Policy
          </Link>
          and
          <Link to="#" className="link">
            Terms of Use.
          </Link>
        </p>
      </form>
    </div>
  );
}
