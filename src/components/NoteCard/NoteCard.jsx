import { FaTrash, FaArchive, FaEdit } from "react-icons/fa";
import axios from "axios";
import "./NoteCard.css";
import { useNavigate } from "react-router-dom";
import { useNotes, useTheme } from "../../context";
export const NoteCard = ({ note, deleteIcon }) => {
  const { _id, title, label, notes } = note;
  const { theme } = useTheme();
  const { deleteNote, updateNote, setShowForm, setNote, setIsEditing } =
    useNotes();
  const navigate = useNavigate();

  const updateNoteHandler = async (note) => {
    setIsEditing(true);
    setShowForm(true);
    setNote(note);
    navigate("/notes");
  };

  return (
    <div
      className={`notecard ${
        theme === "light" ? "light-notecard" : "dark-notecard"
      } `}
    >
      <h3 className="headline-3">{title}</h3>
      <h4 className="headline-4">{label}</h4>
      <p
        className="small-text-2"
        dangerouslySetInnerHTML={{
          __html: notes,
        }}
      ></p>
      <div className="card-footer">
        <FaEdit onClick={() => updateNoteHandler(note)} />
        <FaArchive onClick={() => archiveNotes(_id, note)} />
        {deleteIcon && <FaTrash onClick={() => deleteNote(_id)} />}
      </div>
    </div>
  );
};
