import { SideNav } from "../../components";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context";
export const Archive = () => {
  const { noteState } = useNotes();
  const { archives } = noteState;
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <h1 className="headline-2 text-center">Archived Notes</h1>
          {archives.length !== 0 ? (
            <>
              {archives.map((note) => (
                <NoteCard key={note._id} noteDetails={note} />
              ))}
            </>
          ) : (
            <p className="small-text-1 text-center">
              Nothing in the Archives Yet!
            </p>
          )}
        </div>
      </div>
    </>
  );
};
