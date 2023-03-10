import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [showPoemForm, setShowPoemForm] = useState(true);
  const togglePoemForm = (e) => {
    e.preventDefault();
    setShowPoemForm(!showPoemForm);
  }
  const poemsToDisplay = poems.sort((a, b) => b.title - a.title);
  const addToPoems = (newPoem) => setPoems([...poems, newPoem]);
  useEffect(() => {
    const fetchpoems = async () => {
      try {
        let fetchedpoems = await fetch("http://localhost:8004/poems");
        fetchedpoems = await fetchedpoems.json();
        setPoems(fetchedpoems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchpoems();
  }, []);
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={togglePoemForm}>{showPoemForm ? 'Hide' : 'Show'} new poem form</button>
        {showPoemForm ? <NewPoemForm onAddPoem={addToPoems} /> : null}
      </div>
      <PoemsContainer poems={poemsToDisplay} />
    </div>
  );
}

export default App;
