import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";

export const Editor = ({ value, setValue }) => {
  return (
    <ReactQuill
      className="editor"
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder="Add a Note"
      value={value}
      onChange={setValue}
    />
  );
};
const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "link",
  "code",
];
const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "strike", "code"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
