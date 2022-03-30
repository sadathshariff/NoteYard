import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context";
import "./Navbar.css";
export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <header className="header navbar-container">
        <Link to="/">
          <h2 className="heading-2">NoteYard</h2>
        </Link>
        <nav>
          <div className="nav-items flex">
            <div className="nav-item">
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            </div>
            <div className="nav-item">
              {theme === "light" ? (
                <FaMoon size={20} onClick={toggleTheme} />
              ) : (
                <FaSun size={20} onClick={toggleTheme} />
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
