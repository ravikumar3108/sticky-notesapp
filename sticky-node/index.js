const express = require("express")
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

main().catch(err => console.log(err));

async function main() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/noteeee');
   const connect =  await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
app.use(express.json())
app.use("/app", require("./routes/notesRoutes"))

app.get("", (req, res) => {
    res.send("dfjhsgfdj")
})

app.listen(8000, () => {
    console.log("Server Start")
}) 