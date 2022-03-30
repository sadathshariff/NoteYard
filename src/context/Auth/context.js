import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("UserToken");
  useEffect(() => {
    if (userToken) {
      setLoggedIn(true);
    }
  }, [userToken]);

  const logoutHandler = () => {
    localStorage.removeItem("UserToken");
    setLoggedIn(false);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ loggedIn, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
