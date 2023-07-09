//console.log("HELLO WORLD FROM EXPRESS");
import express from "express";

const app= new express();
app.get("/",(_req,res) => {
    res.send(" HELLO FROM EXPRESS.... FOR REAL THIS TIME")
});

app.listen(7777,()=> console.log("App listening on port 7777"));

