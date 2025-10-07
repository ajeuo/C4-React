const express = require('express'); // heeft de express "dependency"
const app = express();

app.get("/", (req, res) => {
    res.send("dead"); 
});

//maak server aan op localhost 3333
app.listen(3333, () => {
    console.log("running on port 3333");
});