"use client";

import { useState } from "react";

const notesData = [
  { id: 1, title: "Meeting Notes", content: "Discuss project roadmap" },
  { id: 2, title: "Shopping List", content: "Milk, Eggs, Bread" },
  { id: 3, title: "Ideas", content: "Build a note-taking app" },
  { id: 4, title: "Workout Plan", content: "Pushups, Pullups, Jogging" },
  { id: 5, title: "Books to Read", content: "Atomic Habits, Deep Work" },
];

const HomePage = () => {
  const [notes, setNotes] = useState(notesData);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;
    const newEntry = {
      id: Date.now(),
      title: "New Note",
      content: newNote,
    };
    setNotes([newEntry, ...notes]);
    setNewNote("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition">
          Add Note
        </button>
      </header>

      {/* Create Note Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Take a note..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
        />
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-yellow-50 p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <h2 className="font-semibold text-gray-800 mb-2">{note.title}</h2>
            <p className="text-gray-700">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
