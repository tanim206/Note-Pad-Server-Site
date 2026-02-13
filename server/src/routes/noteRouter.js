const express = require("express");
const multer = require("multer");
const {
  handleCreateNote,
  handleGetNotes,
  handleGetNoteByID,
  handleDeleteNotes,
  handleDeleteNoteByID,
  handleUpdateNoteByID,
} = require("../controller/note.controller");
const upload = multer();
const noteRouter = express.Router();

noteRouter.post("/create-note", upload.none(), handleCreateNote);
noteRouter.get("/", handleGetNotes);
noteRouter.delete("/", handleDeleteNotes);
noteRouter.get("/:id", handleGetNoteByID);
noteRouter.delete("/:id", handleDeleteNoteByID);
noteRouter.put("/:id", upload.none(), handleUpdateNoteByID);

module.exports = noteRouter;
