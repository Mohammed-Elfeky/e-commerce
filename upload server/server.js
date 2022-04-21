const express = require('express');
const multer = require('multer');

const app = express();

//middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../src/assets/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

//endpoint
app.post('/upload', upload.array('commingImages'), (req, res) => {
    return res.json({ status: 'OK' });
});

app.listen(3005, () => console.log("running...."));



