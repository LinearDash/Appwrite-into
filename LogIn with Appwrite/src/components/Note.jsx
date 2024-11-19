import db from "../appwrite/databases";
import { useState } from "react";
import DeleteIcon from "../assets/DeleteIcon";

function Note({ setNotes, NoteData }) {
  const [note, setNote] = useState(NoteData);

  const handelUpdate = async () => {
    const complete = !note.complete;

    db.notes.update(note.$id, { complete });
    setNote({ ...note, complete: complete });
  };

  const handelDel = async () => {
    db.notes.delete(note.$id);
    setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
  };
  return (
    <div className="note-wrapper">
      <span className="note-body" onClick={handelUpdate}>
        {note.complete ? <s>{note.body}</s> : <>{note.body}</>}
      </span>
      <div onClick={handelDel}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Note;
