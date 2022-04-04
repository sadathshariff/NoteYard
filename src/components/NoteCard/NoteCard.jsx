import { FaTrash, FaEdit } from "react-icons/fa";
import { RiInboxUnarchiveFill, RiInboxArchiveFill } from "react-icons/ri";
import { BsPin, BsPinFill } from "react-icons/bs";
import "./NoteCard.css";
import { useNavigate } from "react-router-dom";
import { useNotes, useTheme } from "../../context";
export const NoteCard = ({ noteDetails }) => {
  const { _id, title, label, priority, notes, isPinned } = noteDetails;
  const { theme } = useTheme();
  const navigate = useNavigate();

  const {
    setNote,
    setShowForm,
    deleteNote,
    noteDispatch,
    noteState,
    addToArchive,
    restoreFromArchive,
    deleteFromArchive,
  } = useNotes();

  const updateNoteHandler = (_id, note) => {
    setNote({ ...note, isEditing: (note.isEditing = true) });
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
      <div className="note-header">
        <h3 className="headline-3">{title}</h3>
        {isPinned ? <BsPinFill size={25} /> : <BsPin size={25} />}
      </div>
      <h4 className="headline-4">Priority: {priority}</h4>
      <p
        className="small-text-2"
        dangerouslySetInnerHTML={{
          __html: notes,
        }}
      ></p>
      <h4 className="headline-4 label">{label}</h4>
      {noteState.archives.includes(noteDetails) ? (
        <div className="flex-end">
          <RiInboxUnarchiveFill
            onClick={() => restoreFromArchive(noteDetails, noteDispatch)}
          />
          <FaTrash
            onClick={() => deleteFromArchive(noteDetails, noteDispatch)}
          />
        </div>
      ) : (
        <>
          {noteState.trashedNotes.includes(noteDetails) ? (
            <div className="flex-end">
              <FaTrash
                onClick={() =>
                  noteDispatch({
                    type: "REMOVE_FROM_TRASH",
                    payload: noteDetails,
                  })
                }
              />
            </div>
          ) : (
            <div className="card-footer">
              <FaEdit onClick={() => updateNoteHandler(_id, noteDetails)} />
              <RiInboxArchiveFill
                onClick={() => addToArchive(noteDetails, noteDispatch)}
              />
              <FaTrash onClick={() => deleteNote(noteDetails, noteDispatch)} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
