import React from "react";
import Markdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  if (!activeNote) {
    return <div className="no-active-note">ノートを選択してください</div>;
  }

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          placeholder="ノート内容を記入"
          value={activeNote.body}
          onChange={(e) => onEditNote("body", e.target.value)}
        />
      </div>
      <div>
        <h1>{activeNote.title}</h1>
        <Markdown>{activeNote.body}</Markdown>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
