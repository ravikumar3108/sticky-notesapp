const express = require('express')
const router = express.Router()
const { saveNotes,getNotes,updateNotes ,deleteNotes} = require("../controllers/notesControllers")

router.post("/saveNotes", saveNotes)
router.get("/getNotes", getNotes)
router.post("/updateNotes/:id", updateNotes)
router.post("/deleteNotes/:id", deleteNotes)

module.exports = router