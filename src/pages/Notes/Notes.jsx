import "./Notes.css";
import { AddNote, NoteCard, SideNav } from "../../components";
import { useNotes } from "../../context";
export const Notes = () => {
  const { noteState } = useNotes();
  const { notes } = noteState;
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <AddNote />
          {notes.length === 0 ? (
            <h3 className="headline-3 text-center">You don't have any Notes</h3>
          ) : (
            <>
              <h3 className="headline-3 text-center">Notes</h3>
              <div className="notes">
                {notes.map((note) => (
                  <NoteCard
                    key={note._id}
                    noteDetails={note}
                    deleteIcon={true}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
