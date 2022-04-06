import { BsPin, BsPinFill } from "react-icons/bs";
import { useNotes, useTheme } from "../../context";
import "../NoteCard/NoteCard.css";
export const PinnedCard = ({ noteDetails }) => {
  const { title, label, priority, notes, date } = noteDetails;
  const { theme } = useTheme();

  const { noteDispatch, noteState } = useNotes();
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
      <p className="small-text-3">Created at {date}</p>
    </div>
  );
};
