import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "../Signup/Signup.css";
export default function Login() {
  const Navigate = useNavigate();
  const LoginUser = (e) => {
    e.preventDefault();
    Navigate("/dashboard/home");
    alert("user logged in");
  };
  return (
    <div className="login signup">
      <h3>Log in to Dashboard</h3>
      <form className="signup_form">
        <input type="text" placeholder="Your Email" name="email"></input>
        <input
          type="password"
          placeholder="Your Password"
          name="password"
        ></input>
        <Link to="" className="link">
          Forget Password ?
        </Link>
        <button type="submit" onClick={(e) => LoginUser(e)}>
          Log In
        </button>
      </form>
    </div>
  );
}
