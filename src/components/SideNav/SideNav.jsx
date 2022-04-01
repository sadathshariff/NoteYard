import "./SideNav.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import { FaTrash, FaArchive, FaBook, FaUserAlt } from "react-icons/fa";
export const SideNav = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="side-nav-container flex">
        <ul className="list side-nav-list">
          <li>
            <Link to="/notes">
              <FaBook size={20} />
              <h4 className="headline-3">Notes</h4>
            </Link>
          </li>

          <Link to="/archivePage">
            <li className="flex">
              <FaArchive size={20} />
              <h4 className="headline-3">Archive</h4>
            </li>
          </Link>

          <Link to="/deletedPage">
            <li className="flex">
              <FaTrash size={20} />
              <h4 className="headline-3">Trash</h4>
            </li>
          </Link>

          <Link to="/profile">
            <li className="flex">
              <FaUserAlt size={20} />
              <h4 className="headline-3">Profile</h4>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
