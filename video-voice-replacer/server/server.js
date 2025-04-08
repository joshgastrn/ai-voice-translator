const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("video"), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send("No file uploaded");
  // Here you can process the file (audio extraction, TTS, merging etc.)
  res.send({ message: "Video uploaded", filename: file.filename });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
