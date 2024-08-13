import { useEffect, useState } from "react";
import NoteCard from "../components/NotesCard";
import axios from "axios";
import Controls from "../components/Controls";

function NotesPage() {
  const [allNotes, setAllNotes] = useState([]);

  async function getNotes() {
    await axios.get("http://localhost:8000/app/getNotes").then((res) => {
      // console.log(res);
      setAllNotes(res.data.data);
    });
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      {allNotes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
      <Controls/>
    </div>
  );
}

export default NotesPage;
