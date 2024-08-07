import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.mjs";
import {
  login,
  register,
  addPoints,
  redeemPoints,
  getPoints,
  getUsers,
} from "./controllers/user.controller.mjs";
dotenv.config({});

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.post("/api/register", register);
app.post("/api/login", login);
app.post("/api/addPoints", addPoints);
app.post("/api/redeemPoints", redeemPoints);
app.post("/api/getPoints", getPoints);
app.post("/api/getUsers", getUsers);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
