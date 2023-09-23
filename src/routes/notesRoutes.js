const express=require("express");
const auth = require("../middileware/auth");
const { GetNotes, CreateNotes, DeleteNotes, UpdateNotes } = require("../controller/notesController");

const notesRouter = express.Router();
notesRouter.get("/",auth,GetNotes);

notesRouter.post("/",auth,CreateNotes);

notesRouter.delete("/:id",auth,DeleteNotes);

notesRouter.put("/:id",auth,UpdateNotes);
 module.exports= notesRouter;