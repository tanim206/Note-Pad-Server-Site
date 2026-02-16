"use client";
import { useState } from "react";
import { FiEdit, FiTrash2, FiEye, FiPlus } from "react-icons/fi";

const dummyNotes = [
  { id: 1, title: "Note One", description: "This is first note" },
  { id: 2, title: "Note Two", description: "This is second note" },
  { id: 3, title: "Note Three", description: "This is third note" },
  { id: 4, title: "Note Four", description: "This is fourth note" },
  { id: 5, title: "Note Five", description: "This is fifth note" },
  { id: 6, title: "Note Six", description: "This is sixth note" },
];

export default function NotesPage() {
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(4);

  const filteredNotes = dummyNotes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header + Add Note */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold text-red-600">
            My Notes
          </h1>

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition">
            <FiPlus /> Add Note
          </button>
        </div>

        {/* Search + Grid Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            onClick={() => setGrid(grid === 4 ? 2 : 4)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition"
          >
            {grid === 4 ? "Show 2 per row" : "Show 4 per row"}
          </button>
        </div>

        {/* Notes Grid */}
        <div
          className={`grid gap-6 ${
            grid === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="group relative bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition"
            >
              {/* Note content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-red-600">
                  {note.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {note.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-red-600 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center text-sm">
                  {note.title}: {note.description}
                </p>
              </div>

              {/* Bottom CRUD Buttons */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-2 rounded-full hover:bg-red-100 text-red-600">
                  <FiEye />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-red-100 text-green-600">
                  <FiEdit />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-red-100 text-red-600">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
