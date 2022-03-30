import HomePage from "../../assets/HomePage.svg";
import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="main-container">
      <div className="item">
        <img src={HomePage} alt="Note Taking" className="hero-img" />
      </div>
      <div className="item">
        <div className="hero-content">
          <h1 className="headline-1">NoteYard</h1>
          <p className="small-text-1 text-center">
            Put all your Tasks/Notes here rather than Kepping in your Brain
          </p>
          <div className="info-container text-center">
            <Link to="/signup">
              <button className="btn btn-primary">SignUp</button>
            </Link>
            <Link to="/login">
              <p className="small-text-2 login-text">
                Already Have an Account | Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};