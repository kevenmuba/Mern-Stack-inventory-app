import express from "express";
import dotenv from "dotenv";
import { db } from "./db/db.js";

import userRoutes from "./routes/User.routes.js";

import { errorHandler, routeNotFound } from "./utils/errorHandler.js";

dotenv.config();
const app = express();
console.log(process.env.MONGO_URI);
db();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Inventory App</h1>`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use("/*", routeNotFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
