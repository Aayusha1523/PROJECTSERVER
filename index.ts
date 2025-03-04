import dotenv from "dotenv";

import express from "express";
import { connectDatabase } from "./config/database.config";
import userRoutes from "./src/models/routes/user.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || "";

connectDatabase(DB_URI);

//using middleware
app.use(express.urlencoded({ extended: false }));

// using routes
app.use(userRoutes); // no need to write api/v1 it will also work v1 is used for version
// app.use("/hello", (req, res) => {
//   res.status(200).json({ message: "hello to the world" });
// });
app.listen(PORT, () =>
  console.log(`sERVER IS RUNNING IN PORT AT  http://localhost:${PORT}`)
);
