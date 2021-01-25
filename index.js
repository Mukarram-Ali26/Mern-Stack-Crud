const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys')

mongoose.connect('mongodb+srv://mukarram:1234@cluster0.lkeku.mongodb.net/mern-crud?retryWrites=true&w=majority');

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ project: 'Mern Crud' });
});

app.use('/posts', require('./routes/post'));

if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client", "build", "index.html"));
    });
};

const Port = process.env.Port || 5000;
app.listen(Port);

// npm install cors
// "test": "echo \"Error: no test specified\" && exit 1",
// "dev": "nodemon index.js"
//  "start": "node index.js",
// "server": "nodemon index.js",
// "client": "npm run start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""keys.mongo_uri
