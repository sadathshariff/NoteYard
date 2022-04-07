import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth, useTheme } from "../../context";
import "./Navbar.css";
import { Button } from "../Button/Button";
export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const { loggedIn, logoutHandler } = useAuth();
  return (
    <>
      <header className="header navbar-container">
        <Link to="/">
          <h2 className="heading-2 hero-heading">NoteYard</h2>
        </Link>
        <nav>
          <div className="nav-items flex">
            <div className="nav-item">
              {loggedIn ? (
                <Button
                  name={"Logout"}
                  btnclass={"btn-secondary"}
                  onClick={logoutHandler}
                />
              ) : (
                <Link to="/login">
                  <Button name={"Login"} btnclass={"btn-secondary"} />
                </Link>
              )}
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
