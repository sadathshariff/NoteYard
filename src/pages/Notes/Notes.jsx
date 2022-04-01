import "./Notes.css";
import { AddNote, NoteCard, SideNav } from "../../components";
import { useNotes } from "../../context";
export const Notes = () => {
  const { userNotes } = useNotes();
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <AddNote />
          {userNotes.length === 0 ? (
            <h3 className="headline-3 text-center">You don't have any Notes</h3>
          ) : (
            <>
              <h3 className="headline-3 text-center">Notes</h3>
              <div className="notes">
                {userNotes.map((note) => (
                  <NoteCard key={note._id} note={note} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
