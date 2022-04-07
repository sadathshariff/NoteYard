import "./Notes.css";
import { AddNote, NoteCard, PinnedCard, SideNav } from "../../components";
import { useFilter, useNotes } from "../../context";
export const Notes = () => {
  const { noteState } = useNotes();
  const { pinnedNotes } = noteState;
  const { filteredNotes } = useFilter();
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <AddNote />
          <>
            {pinnedNotes.length === 0 ? (
              ""
            ) : (
              <>
                <h3 className="headline-3 text-center">Pinned Notes</h3>
                <div className="notes">
                  {pinnedNotes.map((note) => (
                    <PinnedCard key={note._id} noteDetails={note} />
                  ))}
                </div>
              </>
            )}{" "}
          </>
          {filteredNotes.length === 0 && pinnedNotes.length === 0 ? (
            <h3 className="headline-3 text-center">You don't have any Notes</h3>
          ) : (
            <>
              <h3 className="headline-3 text-center">Notes</h3>
              <div className="notes">
                {filteredNotes.map((note) => (
                  <NoteCard key={note._id} noteDetails={note} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
