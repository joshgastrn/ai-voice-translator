const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("video"), (req, res) => {
  console.log("✅ Video uploaded!");

  // TEMPORARY FAKE VIDEO RESPONSE
  res.json({
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // dummy video URL
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
