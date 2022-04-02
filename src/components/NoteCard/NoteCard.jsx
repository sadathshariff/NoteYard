import { FaTrash, FaArchive, FaEdit } from "react-icons/fa";
import "./NoteCard.css";
import { useNotes, useTheme } from "../../context";
export const NoteCard = ({ note, deleteIcon }) => {
  const { _id, title, label, notes } = note;
  const { theme } = useTheme();
  const { deleteNote, updateNote, setShowForm, setNote } = useNotes();

  const updateNoteHandler = async (id, note) => {
    setShowForm(true);
    setNote(note);
    console.log(note);
    const res = await updateNote(id, note);
    console.log("New", res);
  };

  return (
    <div
      className={`notecard ${
        theme === "light" ? "light-notecard" : "dark-notecard"
      } `}
    >
      <h3 className="headline-3">{title}</h3>
      <h4 className="headline-4">{label}</h4>
      <p className="small-text-2">{notes}</p>
      <div className="card-footer">
        <FaEdit onClick={() => updateNoteHandler(_id, note)} />
        <FaArchive />
        {deleteIcon && <FaTrash onClick={() => deleteNote(_id)} />}
      </div>
    </div>
  );
};
