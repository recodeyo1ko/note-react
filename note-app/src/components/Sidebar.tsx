import React from "react";

export const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button>追加</button>
      </div>
      <div className="app-sidebar-notes">
        <div>
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>削除</button>
          </div>
          <p>body</p>
          <small className="note-meta">修正日</small>
        </div>
        <div>
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>削除</button>
          </div>
          <p>body</p>
          <small className="note-meta">修正日</small>
        </div>
        <div>
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>削除</button>
          </div>
          <p>body</p>
          <small className="note-meta">修正日</small>
        </div>
      </div>
    </div>
  );
};
