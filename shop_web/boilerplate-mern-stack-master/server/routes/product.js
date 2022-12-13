const express = require("express");
const router = express.Router();
const multer = require("multer");

//=================================
//             product
//=================================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

//가져온 이미지 저장 !
//멀터 라이브러리 사용
// /https://www.npmjs.com/package/multer
// front end -> file -> back end -> file info -> front end : back end file save : multer

router.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.status(200).json({
      message: "ok",
    });
  });
});

module.exports = router;
