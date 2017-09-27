import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import auth from "./routes/auth";

const app = express();
mongoose.connect("mongodb://localhost/bookworm", { useMongoClient: true });

app.use(bodyParser.json());
app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("\nRunning on port 8080\n"));
