import React from "react";

type Note = {
  id: string;
  title: string;
  body: string;
  createdAt: number;
};

type SidebarProps = {
  onAddNote: () => void;
  notes: Note[];
};

export const Sidebar: React.FC<SidebarProps> = ({ onAddNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div key={note.id}>
            <div className="sidebar-note-title">
              <strong>title</strong>
              <button>削除</button>
            </div>
            <p>body</p>
            <small className="note-meta">修正日</small>
          </div>
        ))}
      </div>
    </div>
  );
};
