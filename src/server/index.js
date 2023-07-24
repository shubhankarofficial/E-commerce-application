//console.log("HELLO WORLD FROM EXPRESS");
import express from "express";
import { urlencoded, json } from 'body-parser'; 
import cors from 'cors';

import { Price } from './routes/price';
import { Cart } from './routes/cart';
import { Checkout } from './routes/checkout';

const app= new express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false}));
app.use("/price",Price);
app.use("/cart",Cart);
app.use("/checkout", Checkout);

app.listen(7777,()=> console.log("App listening on port 7777"));

