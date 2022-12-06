const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             product
//=================================


//가져온 이미지 저장 ! 
//멀터 라이브러리 사용 
// /https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        
        cb(null, `${Date.now()}_${file.originalname }`)
    }
    })

const upload = multer({ storage: storage })

router.post('/image', function (req, res) {
    upload(req, res, function (err){
        if(err){res.status(500).send(err)}
        else{res.status(200).send('ok')}
    }

})


module.exports = router;
