import React, { useState } from "react";

function NewPoemForm({ setPoems, onAddPoem }) {
  const [inputs, setInputs] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.title && inputs.content && inputs.author) {
      let newPoem = await fetch("http://localhost:8004/poems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      newPoem = await newPoem.json();
      onAddPoem(newPoem);
    }
  };
  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
      />
      <input
        placeholder="Author"
        onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        onChange={(e) => setInputs({ ...inputs, content: e.target.value })}
        rows={10}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
