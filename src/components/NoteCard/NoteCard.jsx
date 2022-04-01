import { FaTrash, FaArchive, FaEdit } from "react-icons/fa";
import "./NoteCard.css";
import { useTheme } from "../../context";
export const NoteCard = ({ note }) => {
  const { title, label, notes } = note;
  const { theme } = useTheme();
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
        <FaEdit />
        <FaArchive />
        <FaTrash />
      </div>
    </div>
  );
};
