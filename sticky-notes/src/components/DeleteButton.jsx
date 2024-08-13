import Trash from "../icons/Trash";
import axios from "axios";


const DeleteButton = ({ id }) => {

  async function deleteNote() {
    let Id = id;
    await axios
      .post(`http://localhost:8000/app/deleteNotes/${Id}`,)
      .then((res) => {
        console.log(res);
      });
      window.location.reload()
  }
  return (
    <div onClick={deleteNote}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
