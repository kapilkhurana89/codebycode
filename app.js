const express = require('express');

const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("demo_image");

const app = express();
app.get("/", (req, res) => {  
   res.send("hello world");
});
app.listen(3000, () => { 
    console.log('Started on port 3000');
});


app.post("/image", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });