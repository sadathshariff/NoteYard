import axios from "axios";
import { Toast } from "../../components";

// Notes
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

// Archives
export const addToArchive = async (note, noteDispatch) => {
  try {
    const res = await axios.post(
      `api/notes/archives/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 201) {
      noteDispatch({ type: "ADD_TO_ARCHIVE", payload: res.data });
      Toast("Added to Archives", "success");
    }
  } catch (error) {
    Toast("Couldn't Add to Archive ", "error");
  }
};
export const restoreFromArchive = async (note, noteDispatch) => {
  try {
    const res = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 200) {
      noteDispatch({ type: "RESTORE_FROM_ARCHIVE", payload: res.data });
      Toast("Restored from Archives", "success");
    }
  } catch (error) {
    Toast("Couldn't Restore from Archive ", "error");
  }
};

export const deleteFromArchive = async (note, noteDispatch) => {
  try {
    const res = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: localStorage.getItem("UserToken") },
    });
    if (res.status === 200) {
      noteDispatch({
        type: "DELETE_FROM_ARCHIVE",
        payload: res.data.archives,
      });
      Toast("Deleted from Archives", "success");
    }
  } catch (error) {
    Toast("Couldn't Delete from Archive ", "error");
  }
};
