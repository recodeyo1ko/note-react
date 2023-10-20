import React from "react";

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div>
      <div>
        <div>
          <h1>
            ノート
            <button onClick={onAddNote}>追加</button>
          </h1>
        </div>
        <div>
          {sortedNotes.map((note) => (
            <div
              className={`${note.id === activeNote && "active"}`}
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
              <strong>{note.title}</strong>
              <p>{note.body}</p>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
