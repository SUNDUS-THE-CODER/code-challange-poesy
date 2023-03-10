import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  return (
    <div className="poems-container">
      {poems.map((key) => (
        <Poem key={key.id} poem={key} />
      ))}
    </div>
  );
}

export default PoemsContainer;
