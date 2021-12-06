import "./SideBar.css";
import { ReactComponent as Logo } from "../../utilities/logo.svg";
import LinkWrapper from "./LinkWrapper";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Logo className="sidebar_logo" />
      <LinkWrapper />
    </div>
  );
}
