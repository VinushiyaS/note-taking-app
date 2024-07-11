import React from 'react';
import EachNote from './EachNote';

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <EachNote key={index} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
