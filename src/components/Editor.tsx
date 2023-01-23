import "react-quill/dist/quill.snow.css"; // import the styles

import ReactQuill from "react-quill";

function Editor() {
  return (
    <ReactQuill
      theme="snow"
      placeholder="Write something..."
      modules={{
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          ["bold", "code", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { align: ["", "center", "right", "justify"] },
            { indent: "+1" },
          ],
          [{ script: "sub" }, { script: "super" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
    />
  );
}

export default Editor;
