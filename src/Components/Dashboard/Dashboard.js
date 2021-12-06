import { Routes, Route } from "react-router";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import TopNav from "./TopNav";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard_main_body">
        <TopNav />
        <Routes>
          <Route
            path="/home"
            element={<div className="dashboard_main">Home</div>}
          ></Route>
          <Route
            path="/transaction"
            element={<div className="dashboard_main">transaction</div>}
          ></Route>
          <Route
            path="/myaccount"
            element={<div className="dashboard_main">myaccount</div>}
          ></Route>
          <Route
            path="/offers"
            element={<div className="dashboard_main">offers</div>}
          ></Route>
          <Route
            path="/refunds"
            element={<div className="dashboard_main">Refund</div>}
          ></Route>
          <Route
            path="/reward"
            element={<div className="dashboard_main">Reward</div>}
          ></Route>
          <Route
            path="/settings"
            element={<div className="dashboard_main">settings</div>}
          ></Route>
          <Route
            path="/settelements"
            element={<div className="dashboard_main">settelements</div>}
          ></Route>
          <Route
            path="/disputes"
            element={<div className="dashboard_main">Disputes</div>}
          ></Route>
          <Route
            path="/subcription"
            element={<div className="dashboard_main">subcription</div>}
          ></Route>
          <Route
            path="/customers"
            element={<div className="dashboard_main">customers</div>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
