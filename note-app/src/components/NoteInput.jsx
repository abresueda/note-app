import React, { useState } from "react";

const NoteInput = ({ onAddNote }) => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleAddNote = () => {
    if (note.trim() === "") return;
    onAddNote({ text: note, color });
    setNote(""); // Notu sıfırla
    setColor("#ffffff"); // Rengi sıfırla
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="note-controls">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
};

export default NoteInput;
