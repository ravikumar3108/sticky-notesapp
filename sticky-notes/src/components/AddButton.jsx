import Plus from "../icons/Plus";
import { useRef } from "react";
import colors from "../assets/colors.json";
import axios from "axios";

const AddButton = () => {
  const startingPos = useRef(10);

  const addNote = async () => {
    const payload = {
      body: "New Note",
      position: {
        x: startingPos.current,
        y: startingPos.current,
      },
      colors: colors[0],
    };
    await axios
      .post("http://localhost:8000/app/saveNotes", payload)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};

export default AddButton;
