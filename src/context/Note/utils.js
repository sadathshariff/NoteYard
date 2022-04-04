import axios from "axios";
import { Toast } from "../../components";

export const addNote = async (note, noteDispatch) => {
  try {
    const res = await axios.post(
      `/api/notes`,
      { note },
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 201) {
      Toast("Note Added", "success");
      noteDispatch({ type: "ADD_NOTE", payload: res.data.notes });
    }
  } catch (error) {
    Toast("Something went Wrong", "error");
  }
};

export const deleteNote = async (note, noteDispatch) => {
  try {
    const res = await axios.delete(`/api/notes/${note._id}`, {
      headers: { authorization: localStorage.getItem("UserToken") },
    });
    if (res.status === 200) {
      Toast("Note Deleted", "success");
      noteDispatch({ type: "DELETE_NOTE", payload: res.data.notes });
      noteDispatch({ type: "TRASHED_NOTES", payload: note });
    }
  } catch (error) {
    Toast("Couldn't Delete Note,Try again later", "error");
  }
};

export const updateNote = async (note, noteDispatch) => {
  try {
    const res = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 201) {
      Toast("Note Edited", "success");
      noteDispatch({ type: "EDIT_NOTE", payload: res.data.notes });
    }
  } catch (error) {
    Toast("Couldn't Update Note", "error");
  }
};
