import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("luigi");
  const [pending, setPending] = useState(false);
  /* # Listening for form events: 
  You have two options available either you listen for a event on the parenting
  <form> element via the onSubmit event. Or you can have this reside within it,
  on the actual form's <button> with the onClick event. */
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default behavior
    const blog = { title, body, author };
    setPending(true);
    fetch("http://localhost:8000/blogs", {
      // CRUD: create a (POST) request:
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setPending(false);
      console.log("new blog added successfully ");
    });
  };
  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>
        {!pending && <button>Add Blog</button>}
        {pending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
