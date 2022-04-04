import "./AddNote.css";
import { Button, Editor, ColorPicker } from "../index";
import { FaPlusCircle } from "react-icons/fa";
import { useNotes } from "../../context";
export const AddNote = () => {
  const {
    addNote,
    updateNote,
    note,
    setNote,
    noteDispatch,
    showForm,
    setShowForm,
  } = useNotes();

  const initialData = {
    title: "",
    label: "Home",
    notes: "",
    priority: "High",
    isEditing: false,
    isPinned: false,
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    note.isEditing
      ? updateNote(note, noteDispatch)
      : addNote(note, noteDispatch);
    setNote(initialData);
    setShowForm(false);
  };
  const handleClose = () => {
    setNote(initialData);
    setShowForm((prev) => !prev);
  };

  return (
    <div className="addNote-main-container">
      <div
        className="addNote-btn flex"
        onClick={() => setShowForm((prev) => !prev)}
      >
        <FaPlusCircle size={25} color={"#1476B8"} />
        <p className="small-text-1">Take a Note</p>
      </div>
      {showForm && (
        <div className="addNote-container">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-col-3 grid-gap-1">
              <div className="input ">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  name="title"
                  className="input-text"
                  id="title"
                  placeholder="Enter Title"
                  value={note.title}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="label">label*</label>
                <select
                  name="label"
                  id="label"
                  className="input-text"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="Work">Work</option>
                  <option value="Home">Home</option>
                  <option value="Chores">Chores</option>
                  <option value="Exercise">Exercise</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="priority">Priority*</label>
                <select
                  name="priority"
                  id="priority"
                  className="input-text"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="input">
              <Editor
                name="notes"
                className="input-text"
                value={note.notes}
                setValue={(e) => setNote({ ...note, notes: e })}
              />
            </div>

            <div className="addNote-footer">
              <Button
                name={"Cancel"}
                btnclass={"btn-danger"}
                onClick={handleClose}
              />
              {!note.isEditing ? (
                <Button name={"Add Note"} btnclass={"btn-primary"} />
              ) : (
                <Button name={"Update Note"} btnclass={"btn-primary"} />
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
