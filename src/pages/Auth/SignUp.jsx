import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Button } from "../../components";
import axios from "axios";
export const SignUp = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(initialData);
  const [showPassword, setShowPassoword] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(userDetails);
  };
  const handleSignup = async (userDetails) => {
    try {
      const res = await axios.post("/api/auth/signup", userDetails);
      if (res.status === 201) {
        setUserDetails(initialData);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="signup-card">
      <div className="signup">
        <h2 className="headline-2 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="firstname">FirstName*</label>
            <input
              type="text"
              name="firstName"
              id="firstname"
              className="input-text"
              value={userDetails.firstName}
              required
              onChange={(e) => handleChange(e)}
              placeholder="FirstName"
            />
          </div>
          <div className="input">
            <label htmlFor="lastname">LastName*</label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              className="input-text"
              value={userDetails.lastName}
              required
              onChange={(e) => handleChange(e)}
              placeholder="LastName"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-text"
              required
              value={userDetails.email}
              onChange={(e) => handleChange(e)}
              placeholder="test@test.com"
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password*</label>
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              id="password"
              className="input-text"
              required
              value={userDetails.password}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your Password"
            />
            <span
              onClick={() => {
                setShowPassoword({
                  ...showPassword,
                  password: !showPassword.password,
                });
              }}
            >
              {showPassword.password ? (
                <FaEye className="eye-icon" />
              ) : (
                <FaEyeSlash className="eye-icon" />
              )}
            </span>
          </div>
          <div className="input">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="input-text"
              required
              value={userDetails.confirmPassword}
              onChange={(e) => handleChange(e)}
              placeholder="Re-enter your Password"
            />
            <span
              onClick={() => {
                setShowPassoword({
                  ...showPassword,
                  confirmPassword: !showPassword.confirmPassword,
                });
              }}
            >
              {showPassword.confirmPassword ? (
                <FaEye className="eye-icon" />
              ) : (
                <FaEyeSlash className="eye-icon" />
              )}
            </span>
          </div>
          <div className="input">
            <Button btnclass={"btn-primary"} name={"SIGNUP"} />
          </div>
          <div className="input text-center">
            <Link to="/login">
              <p className="small-text-3">Already have an account | Login </p>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
