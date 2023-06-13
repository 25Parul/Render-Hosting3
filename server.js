const express = require("express");
const path =  require("path");
const app= express();
const port = 3020;

app.use(express.static(path.join(__dirname, "/build")))

app.listen(port, ()=>{
    console.log("Listening on port", port)
});

