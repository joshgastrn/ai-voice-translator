const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// ✅ Enable CORS for all origins
app.use(cors());

// Parse JSON (if needed)
app.use(express.json());

// Handle video uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("video"), (req, res) => {
  console.log("Received file:", req.file);

  // For now, just simulate voice generation and return dummy audio URL
  res.json({
    message: "Video uploaded successfully!",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
