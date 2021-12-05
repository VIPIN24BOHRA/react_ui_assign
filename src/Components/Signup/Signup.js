import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const Navigate = useNavigate();
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
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          name="cnf_password"
        ></input>
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
