import { Routes, Route } from "react-router-dom";
import MockAPI from "../Mockman";
import { Home, Login, SignUp, Notes, Archive, Deleted } from "../pages";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/archivePage" element={<Archive />} />
      <Route path="/deletedPage" element={<Deleted />} />
    </Routes>
  );
};
