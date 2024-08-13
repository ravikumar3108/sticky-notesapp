import Trash from "../icons/Trash";
import axios from "axios";

const SaveButton = ({ body, id, position }) => {
  
  async function updateNote() {
    console.log(body)
    let noteId = id;
    await axios
      .post(`http://localhost:8000/app/updateNotes/${noteId}`, {
        body: body,
        position: position,
      })
      .then((res) => {
        console.log(res);
      });
    // window.location.reload();
  }

  return (
    <>
      <button onClick={updateNote} className="save-btn">
        Save
      </button>
    </>
  );
};

export default SaveButton;
