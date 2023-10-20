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
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
          id="title"
        />
        <textarea
          placeholder="ノート内容を記入"
          value={activeNote.body}
          onChange={(e) => onEditNote("body", e.target.value)}
          id="body"
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <Markdown className="markdown-preview">{activeNote.body}</Markdown>
      </div>
    </div>
  );
};

export default Main;
