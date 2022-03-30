import "./App.css";
import { useTheme } from "./context";
import { RouterPath } from "./routes/RouterPath";
import { Navbar } from "./components";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <Navbar />
      <RouterPath />
    </div>
  );
}

export default App;
