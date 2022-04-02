import "./AddNote.css";
import { Button } from "../index";

import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { useNotes } from "../../context";
export const AddNote = () => {
  const initialData = {
    title: "",
    label: "",
    notes: "",
  };
  // const [note, setNote] = useState(initialData);
  // const [showNote, setShowNote] = useState(false);
  const { setUserNotes, showForm, setShowForm, note, setNote, updateNote } =
    useNotes();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({ ...note, [name]: value });
  };

  const submitNote = async (note) => {
    try {
      const res = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        }
      );
      if (res.status === 201) {
        setUserNotes(res.data.notes);
        setShowForm(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitNote(note);
    setNote(initialData);
  };
  const handleClose = () => {
    setNote(initialData);
    setShowForm((prev) => !prev);
  };
  const update = () => {
    
  }
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
            <div className="grid grid-col-2 grid-gap-1">
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
                  <option value="Class">Class</option>
                  <option value="Exercise">Exercise</option>
                </select>
              </div>
            </div>
            <div className="input">
              <textarea
                type="text"
                name="notes"
                className="input-text"
                id="notes"
                placeholder="Enter Text Here"
                value={note.notes}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="addNote-footer">
              <Button
                name={"Cancel"}
                btnclass={"btn-danger"}
                onClick={handleClose}
              />
              <Button name={"Add Note"} btnclass={"btn-primary"} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
