const { Console } = require('console');
const express = require('express');
const path = require('path');

const app = express();
const PORT=  3080;

app.use(express.static('public'));


app.get("/home", (req,res) => res.sendFile(path.join(__dirname,"views" , "home.html")))
app.listen(PORT,() => console.log(`Server runing http://localhost:${PORT}`)) 