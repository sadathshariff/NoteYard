import { Routes, Route } from "react-router-dom";
import MockAPI from "../Mockman";
import { Home, Login, SignUp } from "../pages";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
