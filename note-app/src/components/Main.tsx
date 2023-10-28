import React from "react";
import Markdown from "react-markdown";

export const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" name="" id="" />
        <textarea name="" id=""></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title"></h1>
        <Markdown className="markdown-preview"></Markdown>
      </div>
    </div>
  );
};
