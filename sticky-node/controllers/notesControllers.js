const Notes = require("../models/notesModels")

const saveNotes = async (req, res) => {
    // console.log(req.body)
    const noteSave = new Notes({
        body: req.body.body,
        colors: {
            id: req.body.colors.id,
            colorHeader: req.body.colors.colorHeader,
            colorBody: req.body.colors.colorBody,
            colorText: req.body.colors.idcolorText,
        },
        position: {
            x: req.body.position.x,
            y: req.body.position.y,
        }

    })
    const result = await noteSave.save();
    res.json({
        status: true,
        data: result
    })
}


const getNotes = async (req, res) => {
    // console.log(req.body)
    const result = await Notes.find({})
    res.json({
        status: true,
        data: result
    })
}


const updateNotes = async (req, res) => {

    // console.log(req.params.id)
    // console.log(req.body)
    const updated = await Notes.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    // console.log(updated)
    res.status(201).json(
        {
            status: true,
            result: updated,
        }
    );
};

const deleteNotes = async (req, res) => {

    console.log()
    const notesID = req.params.id
    // console.log(req.body)
    const updated = await Notes.deleteOne({ _id: notesID });
    // console.log(updated)
    res.status(201).json(
        {
            status: true,
            message: "success"
        }
    );
};




module.exports = { saveNotes, getNotes, updateNotes, deleteNotes }