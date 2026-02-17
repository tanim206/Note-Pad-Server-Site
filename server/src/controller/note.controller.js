const { successResponse } = require("../controller/res.controller");
const createError = require("http-errors");
const fs = require("fs");
const path = require("path");
const Note = require("../models/noteModel");
const {
  getNotes,
  createNote,
  getNote,
  deleteNote,
} = require("../services/note.service");
const mongoose = require("mongoose");

const handleCreateNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/public/notes/${req.file.filename}`
      : null;
    const newNote = await createNote(title, description, imageUrl);
    return successResponse(res, {
      statusCode: 200,
      message: "Note created successfully",
      payload: { newNote },
    });
  } catch (error) {
    next(error);
  }
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
    const notes = await Note.find();

    // ✅ delete all images
    for (let note of notes) {
      if (note.image) {
        const fileName = note.image.split("/").pop();
        const filePath = path.join("public/notes", fileName);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }

    // ✅ delete all notes from DB
    await Note.deleteMany();

    return successResponse(res, {
      statusCode: 200,
      message: "All notes and images deleted successfully",
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
      throw createError(400, "Invalid note id");
    }
    const note = await Note.findById(id);
    if (!note) {
      throw createError(404, "Note not found");
    }
    // ✅ Image delete from server
    if (note.image) {
      const fileName = note.image.split("/").pop(); // get only filename
      const filePath = path.join("public/notes", fileName);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Note.findByIdAndDelete(id);

    return successResponse(res, {
      statusCode: 200,
      message: "Note and image deleted successfully",
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

    const note = await Note.findById(id);
    if (!note) {
      throw createError(404, "Note not found");
    }

    const updateFields = {
      title: req.body.title,
      description: req.body.description,
    };

    // ✅ If new image uploaded
    if (req.file) {
      // delete old image
      if (note.image) {
        const oldFileName = note.image.split("/").pop();
        const oldFilePath = path.join("public/notes", oldFileName);

        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      updateFields.image = `${req.protocol}://${req.get("host")}/public/notes/${req.file.filename}`;
    }

    const updatedNote = await Note.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    return successResponse(res, {
      statusCode: 200,
      message: "Note updated successfully",
      payload: updatedNote,
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
