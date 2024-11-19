import db from "../appwrite/databases";

function NoteForm({ setNote }) {
  const handelAdd = async (e) => {
    e.preventDefault();
    const noteBody = e.target.body.value;
    if (noteBody == "") return;
    try {
      const payload = { body: noteBody };
      const response = await db.notes.create(payload);

      setNote((prevState) => [response, ...prevState]);

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handelAdd} id="todo-form">
      <input type="text" name="body" placeholder="Add a task" />
    </form>
  );
}

export default NoteForm;
