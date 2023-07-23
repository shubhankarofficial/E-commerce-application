//console.log("HELLO WORLD FROM EXPRESS");
import express from "express";
import { urlencoded, json } from 'body-parser'; 
import cors from 'cors';

import { Price } from './routes/price';

const app= new express();
app.get("/",(_req,res) => {
    res.send(" HELLO FROM EXPRESS.... FOR REAL THIS TIME")
});

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false}));
app.use("/price",Price);

app.listen(7777,()=> console.log("App listening on port 7777"));

