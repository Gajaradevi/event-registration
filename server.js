const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register',(req, res) => {
    const {name, email} = req.body;
    console.log(`New registration:${name}(${email})`);
    res.json({message:'Thank you for registration!'});

});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});