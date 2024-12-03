import React from "react";

const NoteList = ({ notes, filter, onFilterChange }) => {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="note-list">
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className="note-item"
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </div>
        ))
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NoteList;
