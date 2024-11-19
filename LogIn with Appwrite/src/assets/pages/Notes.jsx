import { useEffect, useState } from "react";
import db from "../../appwrite/databases";
import NoteForm from "../../components/NoteForm";
import { Query } from "appwrite";
import Note from "../../components/Note";

function Notes() {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list([Query.orderDesc("$createdAt")]);
    setNote(response.documents);
  };

  return (
    <div>
      <NoteForm setNote={setNote} />
      <div>
        {notes.map((note) => (
          <Note key={note.$id} setNotes={setNote} NoteData={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
