import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

function App() {
  type Note = {
    id: string;
    title: string;
    body: string;
    createdAt: number;
  };
  const [notes, setNotes] = useState<Note[]>([]);

  const onAddnote = () => {
    const newNote: Note = {
      id: "id",
      title: "title",
      body: "body",
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddnote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
