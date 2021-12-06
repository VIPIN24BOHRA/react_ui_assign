import { ReactComponent as Home } from "../../utilities/Home.svg";
import { ReactComponent as Transaction } from "../../utilities/transaction.svg";
import { ReactComponent as Subcription } from "../../utilities/Subcription.svg";
import { ReactComponent as Settelement } from "../../utilities/Settelement.svg";
import { ReactComponent as Disputes } from "../../utilities/Disputes.svg";
import { ReactComponent as Refunds } from "../../utilities/Refunds.svg";
import { ReactComponent as Customers } from "../../utilities/Customers.svg";
import { ReactComponent as Offers } from "../../utilities/Offers.svg";
import { ReactComponent as MyAccount } from "../../utilities/MyAccount.svg";
import { ReactComponent as Reward } from "../../utilities/Reward.svg";
import { ReactComponent as Settings } from "../../utilities/Settings.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const colorArr = [
  "#53B9EA",
  "#F05050",
  "#F19A5E",
  "#27C24B",
  "#F05050",
  "#27C24B",
  "#FBE165",
  "#27C24B",
  "#F05050",
  "#53B9EA",
  "#F19A5E",
];

export default function LinkWrapper() {
  const [index, setIndex] = useState(0);

  const dot_style = {
    backgroundColor: colorArr[index],
    boxShadow: `0px 0px 7px ${colorArr[index]}`,
  };
  const text_style = {
    color: colorArr[index],
  };
  return (
    <div className="links">
      <div className="link_wrapper">
        {index === 0 ? <span style={dot_style} className="dot"></span> : null}
        <Home className="link_logo" />
        <Link
          to="/dashboard/home"
          className="link"
          onClick={() => {
            setIndex(0);
          }}
          style={index === 0 ? text_style : null}
        >
          Home
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 1 ? <span style={dot_style} className="dot"></span> : null}
        <Transaction className="link_logo" />
        <Link
          to="/dashboard/transaction"
          className="link"
          onClick={() => {
            setIndex(1);
          }}
          style={index === 1 ? text_style : null}
        >
          Transaction
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 2 ? <span style={dot_style} className="dot"></span> : null}
        <Subcription className="link_logo" />
        <Link
          to="/dashboard/subcription"
          className="link"
          onClick={() => {
            setIndex(2);
          }}
          style={index === 2 ? text_style : null}
        >
          Subcription Plus
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 3 ? <span style={dot_style} className="dot"></span> : null}
        <Settelement className="link_logo" />
        <Link
          to="/dashboard/Settelements"
          className="link"
          onClick={() => {
            setIndex(3);
          }}
          style={index === 3 ? text_style : null}
        >
          Settelement
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 4 ? <span style={dot_style} className="dot"></span> : null}
        <Disputes className="link_logo" />
        <Link
          to="/dashboard/disputes"
          className="link"
          onClick={() => {
            setIndex(4);
          }}
          style={index === 4 ? text_style : null}
        >
          Disputes
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 5 ? <span style={dot_style} className="dot"></span> : null}
        <Refunds className="link_logo" />
        <Link
          to="/dashboard/Refunds"
          className="link"
          onClick={() => {
            setIndex(5);
          }}
          style={index === 5 ? text_style : null}
        >
          Refunds
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 6 ? <span style={dot_style} className="dot"></span> : null}
        <Customers className="link_logo" />
        <Link
          to="/dashboard/Customers"
          className="link"
          onClick={() => {
            setIndex(6);
          }}
          style={index === 6 ? text_style : null}
        >
          Customers
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 7 ? <span style={dot_style} className="dot"></span> : null}
        <Offers className="link_logo" />
        <Link
          to="/dashboard/Offers"
          className="link"
          onClick={() => {
            setIndex(7);
          }}
          style={index === 7 ? text_style : null}
        >
          Offers
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 8 ? <span style={dot_style} className="dot"></span> : null}
        <Reward className="link_logo" />
        <Link
          to="/dashboard/Reward"
          className="link"
          onClick={() => {
            setIndex(8);
          }}
          style={index === 8 ? text_style : null}
        >
          Reward Points
        </Link>
      </div>
      <div className="link_wrapper">
        {index === 9 ? <span style={dot_style} className="dot"></span> : null}
        <MyAccount className="link_logo" />
        <Link
          to="/dashboard/myaccount"
          className="link"
          onClick={() => {
            setIndex(9);
          }}
          style={index === 9 ? text_style : null}
        >
          My Account
        </Link>
      </div>
      <div className="link_wrapper">
        <Settings className="link_logo" />
        {index === 10 ? <span style={dot_style} className="dot"></span> : null}
        <Link
          to="/dashboard/settings"
          className="link"
          onClick={() => {
            setIndex(10);
          }}
          style={index === 10 ? text_style : null}
        >
          Settings
        </Link>
      </div>
    </div>
  );
}
