import { Routes, Route } from "react-router-dom";
import MockAPI from "../Mockman";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/mockman" element={<MockAPI />} />
    </Routes>
  );
};
