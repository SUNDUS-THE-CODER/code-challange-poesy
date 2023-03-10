import React, { useState } from "react";

function Poem({ poem }) {
  const [read, setRead] = useState(false);
  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- By {poem.author}</strong>
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setRead(!read);
        }}
      >
        {read ? "Mark as unread" : "Mark as read"}
      </button>
    </div>
  );
}

export default Poem;
