import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox,FaRegClock,FaQuestionCircle,FaArrowCircleRight,FaCodeBranch } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon : <FaInbox className="fs-2" />},
    { label: "History", icon : <FaRegClock className="fs-2" />},
    { label: "Studio", icon : <FaCodeBranch className="fs-2" />},
    { label: "Commons", icon : <FaArrowCircleRight className="fs-2" />},
    { label: "Help", icon : <FaQuestionCircle className="fs-2" />},
  ];

  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li >
        <h1 className="red">N</h1>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} > {link.icon} </Link> <br/>
          <Link to={`/Kanbas/${link.label}`} > {link.label } </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;