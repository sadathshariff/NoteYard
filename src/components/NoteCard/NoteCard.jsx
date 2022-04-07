import { FaTrash, FaEdit } from "react-icons/fa";
import { RiInboxUnarchiveFill, RiInboxArchiveFill } from "react-icons/ri";
import { BsPin, BsPinFill } from "react-icons/bs";
import "./NoteCard.css";
import { useNavigate } from "react-router-dom";
import { useNotes, useTheme } from "../../context";
import { ColorPicker } from "../ColorPicker/ColorPicker";
export const NoteCard = ({ noteDetails }) => {
  const { _id, title, label, priority, notes, date } = noteDetails;
  const { theme } = useTheme();
  const navigate = useNavigate();
  const initialData = {
    title: "",
    label: "Home",
    notes: "",
    priority: "High",
    isEditing: false,
    bgColor: "off-white",
    date: new Date().toLocaleString(),
  };

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
    setNote({
      ...note,
      date: (note.date = new Date().toLocaleString()),
      isEditing: (note.isEditing = true),
    });
    setShowForm(true);
    setNote(note);
    navigate("/notes");
  };
  const handleColor = (note, color) => {
    setNote({ ...note, bgColor: (note.bgColor = color) });
    setNote(initialData);
  };

  return (
    <div
      className={`notecard ${
        theme === "light" ? "light-notecard" : "dark-notecard"
      } `}
      style={{ backgroundColor: noteDetails.bgColor }}
    >
      <div className="note-header">
        <h3 className="headline-3">{title}</h3>
        {noteState.pinnedNotes.includes(noteDetails) ? (
          <BsPinFill
            size={25}
            onClick={() =>
              noteDispatch({ type: "UNPIN_NOTE", payload: noteDetails })
            }
          />
        ) : (
          <BsPin
            size={25}
            onClick={() =>
              noteDispatch({ type: "PIN_NOTE", payload: noteDetails })
            }
          />
        )}
      </div>
      <h4 className="headline-4">Priority: {priority}</h4>
      <p
        className="small-text-2"
        dangerouslySetInnerHTML={{
          __html: notes,
        }}
      ></p>
      <h4 className="headline-4 label">{label}</h4>

      {noteState.pinnedNotes.includes(noteDetails) ? (
        ""
      ) : (
        <>
          {noteState.archives.includes(noteDetails) ? (
            <div className="archive-icons">
              <p className="small-text-3">Created at {date}</p>
              <RiInboxUnarchiveFill
                size={25}
                className="note-footer-icon"
                onClick={() => restoreFromArchive(noteDetails, noteDispatch)}
              />
              <FaTrash
                size={25}
                className="note-footer-icon"
                onClick={() => deleteFromArchive(noteDetails, noteDispatch)}
              />
            </div>
          ) : (
            <>
              {noteState.trashedNotes.includes(noteDetails) ? (
                <div className="flex-sb">
                  <p className="small-text-3">Created at {date}</p>
                  <FaTrash
                    className="note-footer-icon"
                    size={25}
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
                  <p className="small-text-3">Created at {date}</p>
                  <ColorPicker
                    size={25}
                    changeColor={(color) => handleColor(noteDetails, color)}
                  />
                  <FaEdit
                    className="note-footer-icon"
                    size={25}
                    onClick={() => updateNoteHandler(_id, noteDetails)}
                  />
                  <RiInboxArchiveFill
                    size={25}
                    className="note-footer-icon"
                    onClick={() => addToArchive(noteDetails, noteDispatch)}
                  />
                  <FaTrash
                    className="note-footer-icon"
                    size={20}
                    onClick={() => deleteNote(noteDetails, noteDispatch)}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
