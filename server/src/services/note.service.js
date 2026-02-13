const mongoose = require("mongoose");
const createError = require("http-errors");
const Note = require("../models/noteModel");

const createNote = async (title, description, image) => {
  try {
    const noteData = { title, description, image };
    const note = await Note.create(noteData);
    return note;
  } catch (error) {
    throw error;
  }
};
const getNotes = async (search) => {
  try {
    let filter = {};
    if (search) {
      filter = {
        $or: [{ title: { $regex: search, $options: "i" } }],
      };
    }
    const notes = await Note.find(filter);
    const totalNotes = await Note.countDocuments(filter);
    return { notes, totalNotes };
  } catch (error) {
    throw error;
  }
};
const getNote = async (id) => {
  try {
    const note = await Note.findById(id);
    return note;
  } catch (error) {
    throw error;
  }
};
const deleteNote = async (id) => {
  try {
    const note = await Note.findByIdAndDelete(id);
    return note;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNote, getNotes, getNote, deleteNote };
