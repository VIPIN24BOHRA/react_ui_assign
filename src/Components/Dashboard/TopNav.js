import { ReactComponent as Search } from "../../utilities/Magnifier icn.svg";
import { ReactComponent as Menu } from "../../utilities/Menu icn.svg";
import { ReactComponent as Bell } from "../../utilities/Bell Icn.svg";
import { ReactComponent as Ellipse } from "../../utilities/Ellipse 1.svg";
export default function TopNav() {
  return (
    <nav className="top_nav">
      <div className="top_nav_text1">Dashboard</div>
      <div className="top_nav_shrink"></div>
      <Search className="magnify_icon" />
      <Menu className="menu_icon" />
      <div className="bell_icon_wrapper">
        <Bell className="bell_icon" />
        <span>15</span>
      </div>
      <Ellipse className="ellipse_icon" />
      <div className="top_nav_text2">Groww90</div>
    </nav>
  );
}
