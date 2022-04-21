const express = require("express")
const app = express()
let path = require ("path")
let port = 3030
app.use(express.static("public"))
app.use(express.static("views"))
app.get("/", (req,res) => {
    res.sendFile (path.resolve("./views/home.html"))
})

app.listen(port, () => console.log ("servidor encendido en puerto 3030 ahora mismo")) 