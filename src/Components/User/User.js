import { Routes, Route } from "react-router";
import "./User.css";
import { ReactComponent as Logo } from "../../utilities/logo.svg";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Verify from "../Verify/Verify";
import { Link } from "react-router-dom";
import img1 from "../../utilities/Rectangle 38.png";
import img2 from "../../utilities/Rectangle 39.png";
import img3 from "../../utilities/Rectangle 40.png";
import img4 from "../../utilities/Rectangle 41.png";
import img5 from "../../utilities/Rectangle 42.png";
import img6 from "../../utilities/Rectangle 43.png";
import img7 from "../../utilities/Rectangle 44.png";
import img8 from "../../utilities/Rectangle 45.png";
import img9 from "../../utilities/Rectangle 46.png";
import img10 from "../../utilities/Rectangle 47.png";
import img11 from "../../utilities/Rectangle 48.png";
import img12 from "../../utilities/Rectangle 49.png";
export default function User() {
  return (
    <div className="user">
      <div className="user_top_nav">
        <Logo className="logo" />
        <Routes>
          <Route
            path="/login"
            element={
              <div>
                New to Subspace?
                <Link to="/user/">
                  <button>Sign up</button>
                </Link>
              </div>
            }
          ></Route>
          <Route
            path="*"
            element={
              <div>
                Already a user?
                <Link to="/user/login">
                  <button>Log In</button>
                </Link>
              </div>
            }
          ></Route>
        </Routes>
      </div>
      <div className="user_body">
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
        </Routes>
        <div className="user_main_body">
          <h3>Why choose SubSpace?</h3>
          <p>2000+ business trust their payments with SubSpace.</p>
          <div className="img_block">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
          </div>
          <p className="para">
            Need help? We are just click away.
            <Link to="#" className="link">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
