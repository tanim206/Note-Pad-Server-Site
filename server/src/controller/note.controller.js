const { successResponse } = require("../controller/res.controller");
const createError = require("http-errors");
const Note = require("../models/noteModel");
const {
  getNotes,
  createNote,
  getNote,
  deleteNote,
} = require("../services/note.service");
const mongoose = require("mongoose");

const handleCreateNote = async (req, res, next) => {
  const { title, description, image } = req.body;
  const newNote = await createNote(title, description, image);
  return successResponse(res, {
    statusCode: 200,
    message: "Note create successfully",
    payload: { newNote },
  });
};
const handleGetNotes = async (req, res, next) => {
  try {
    const { search } = req.params;
    const allNotes = await getNotes(search);
    return successResponse(res, {
      statusCode: 200,
      message: "Notes return successfully",
      payload: allNotes,
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteNotes = async (req, res, next) => {
  try {
    await Note.deleteMany();
    return successResponse(res, {
      statusCode: 200,
      message: "Notes delete successfully",
    });
  } catch (error) {
    next(error);
  }
};
const handleGetNoteByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    const note = await getNote(id);
    return successResponse(res, {
      statusCode: 200,
      message: "Note return successfully",
      payload: note,
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteNoteByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    await deleteNote(id);
    return successResponse(res, {
      statusCode: 200,
      message: "Note delete successfully",
    });
  } catch (error) {
    next(error);
  }
};
const handleUpdateNoteByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid note id");
    }
    const updateFields = {};
    if (req.body.title) updateFields.title = req.body.title;
    if (req.body.description) updateFields.description = req.body.description;
    if (req.body.image) updateFields.image = req.body.image;
    const result = await Note.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      throw createError(404, "Note not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "Note updated successfully",
      payload: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateNote,
  handleGetNotes,
  handleDeleteNotes,
  handleGetNoteByID,
  handleDeleteNoteByID,
  handleUpdateNoteByID,
};
