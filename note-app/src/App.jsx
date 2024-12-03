import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteInput onAddNote={addNote} />
      <NoteList
        notes={notes}
        filter={filter}
        onFilterChange={setFilter}
      />
    </div>
  );
};

export default App;
