import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
const NoteContext = createContext(null);
import axios from "axios";
import { useAuth } from "../Auth/context";
import { noteReducer } from "./reducer";
import {
  addNote,
  deleteNote,
  updateNote,
  addToArchive,
  restoreFromArchive,
  deleteFromArchive,
} from "./utils";
const NoteProvider = ({ children }) => {
  const initialData = {
    title: "",
    label: "Home",
    notes: "",
    priority: "High",
    isEditing: false,
    isPinned: false,
  };
  const [note, setNote] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const { loggedIn } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    notes: [],
    archives: [],
    trashedNotes: [],
  });

  const getUserNotes = async (noteDispatch) => {
    try {
      const res = await axios.get("/api/notes", {
        headers: { authorization: localStorage.getItem("UserToken") },
      });
      if (res.status === 200) {
        noteDispatch({ type: "GET_NOTES", payload: res.data.notes });
      }
    } catch (error) {
      console.error("Get Notes Error", error);
    }
  };
  const getArchiveNotes = async (noteDispatch) => {
    try {
      const res = await axios.get("/api/archives", {
        headers: { authorization: localStorage.getItem("UserToken") },
      });
      if (res.status === 200) {
        noteDispatch({ type: "GET_ARCHIVE_NOTES", payload: res.data.archives });
      }
    } catch (error) {
      console.error("Get Notes Error", error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getUserNotes(noteDispatch);
      getArchiveNotes(noteDispatch);
    }
  }, [loggedIn]);

  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        noteState,
        noteDispatch,
        addNote,
        deleteNote,
        updateNote,
        showForm,
        setShowForm,
        addToArchive,
        restoreFromArchive,
        deleteFromArchive,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
