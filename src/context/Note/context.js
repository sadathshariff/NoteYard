import { useState, createContext, useContext, useEffect } from "react";
const NoteContext = createContext(null);
import axios from "axios";
import { useAuth } from "../Auth/context";
const NoteProvider = ({ children }) => {
  const [userNotes, setUserNotes] = useState([]);
  const token = localStorage.getItem("UserToken");
  const { loggedIn } = useAuth();

  const getUserNotes = async () => {
    try {
      const res = await axios.get("/api/notes", {
        headers: { authorization: token },
      });
      if (res.status === 200) {
        setUserNotes(res.data.notes);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getUserNotes();
    }
  }, [loggedIn]);

  return (
    <NoteContext.Provider value={{ userNotes, setUserNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
