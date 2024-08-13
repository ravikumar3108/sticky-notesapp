import Trash from "../icons/Trash";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { setNewOffset, setZIndex } from "../utils";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";

function NoteCard({ note }) {
  // console.log("notes", note.colors.colorBody);
  //   let position = JSON.parse(note.position);
  const colors = note.colors;
  const body = note.body;
  const [position, setPositon] = useState(note.position);
  const [bodyData, setBody] = useState(note.body);
  // console.log(bodyData);
  let mouseStartPos = { x: 0, y: 0 };
  const cardRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  function autoGrow(textAreaRef) {
    const { current } = textAreaRef;
    current.style.height = "auto"; // Reset the height
    current.style.height = current.scrollHeight + "px"; // Set the new height
  }

  //   Mouse Down Event
  //   The first action taken to drag a note is the mousedown event,
  //    as a user clicks down on the header of our note card component

  const mouseDown = (e) => {
    setZIndex(cardRef.current);
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    //1 - Calculate move direction
    let mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    //2 - Update start position for next move.
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    //3 - Update card top and left position.
    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPositon(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        onMouseDown={mouseDown}
        style={{ backgroundColor: colors.colorHeader }}
      >
        <DeleteButton id={note._id} />
        <SaveButton body={bodyData} id={note._id} position={position} />
      </div>
      <div className="card-body">
        <textarea
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default NoteCard;
