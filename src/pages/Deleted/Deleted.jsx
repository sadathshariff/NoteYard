import { SideNav } from "../../components";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context";

export const Deleted = () => {
  const { noteState } = useNotes();
  const { trashedNotes } = noteState;
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <h1 className="headline-2 text-center">Deleted Notes</h1>
          {trashedNotes.length !== 0 ? (
            <div className="notes">
              {trashedNotes.map((note) => (
                <NoteCard key={note._id} noteDetails={note} />
              ))}
            </div>
          ) : (
            <p className="small-text-1 text-center">No Notes in the Trash!</p>
          )}
        </div>
      </div>
    </>
  );
};
