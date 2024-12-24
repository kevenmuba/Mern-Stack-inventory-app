import express from "express";
import dotenv from "dotenv";
import { db } from "./db/db.js";

dotenv.config();
const app = express();
console.log(process.env.MONGO_URI);
db();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Inventory App</h1>`);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
