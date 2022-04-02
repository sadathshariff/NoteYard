import { useState, createContext, useContext, useEffect } from "react";
const NoteContext = createContext(null);
import axios from "axios";
import { useAuth } from "../Auth/context";
const NoteProvider = ({ children }) => {
  const initialData = {
    title: "",
    label: "",
    notes: "",
  };
  const [note, setNote] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [userNotes, setUserNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
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
      console.error("Get Notes Error", error);
    }
  };
  const deleteNote = async (notesId) => {
    try {
      const res = await axios.delete(`/api/notes/${notesId}`, {
        headers: { authorization: token },
      });
      const findDeletedNote = userNotes.find((item) => item._id === notesId);
      if (res.status === 200) {
        setUserNotes(res.data.notes);
        setDeletedNotes([findDeletedNote, ...deletedNotes]);
      }
    } catch (error) {
      console.error("Post Notes Error", error);
    }
  };

  const updateNote = async (noteId, note) => {
    try {
      const res = await axios.post(
        `/api/notes/${noteId}`,
        {
          note,
        },
        {
          headers: { authorization: token },
        }
      );
      console.log("Updated Res", res);
      setUserNotes(res.data.notes);
    } catch (error) {
      console.error("Update Notes Error", error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getUserNotes();
    }
  }, [loggedIn]);

  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        showForm,
        setShowForm,
        userNotes,
        setUserNotes,
        deleteNote,
        deletedNotes,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
