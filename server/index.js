import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Signup, Login } from "./controllers/user.js";
import { addTransiction,fetchTransiction,deletTransiction } from "./controllers/transaction .js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const connectionDB = async () => {
  const connection = await mongoose.connect(process.env.MONGOOSE_URL);

  if (connection) {
    console.log("mongoose start successfully");
  } else {
    console.log("mongoose does not start successfully");
  }
};
connectionDB();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server started successfully",
  });
});

app.post("/signup", Signup);
app.post("/login", Login);

app.post("/addTransiction", addTransiction)
app.get("/getTransiction", fetchTransiction)
app.delete("/Transiction/:id" , deletTransiction)

const PORT = process.env.PORT_URL;

app.listen(PORT, () => {
  console.log(`server running at port : ${PORT}`);
});
