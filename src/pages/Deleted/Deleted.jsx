import { SideNav } from "../../components";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context";

export const Deleted = () => {
  const { deletedNotes } = useNotes();
  console.log(deletedNotes);
  return (
    <>
      <div className="notePage-container">
        <SideNav />
        <div className="display-notes-container">
          <h1>Deleted Page</h1>
          {deletedNotes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};
