import "./App.css";
import { useTheme } from "./context";
import { RouterPath } from "./routes/RouterPath";
import { Navbar } from "./components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar />
      <RouterPath />
    </div>
  );
}

export default App;
