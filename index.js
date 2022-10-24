// Imports
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Open server for listing port:3000
app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));

// Sending get reques for index.html 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Fetch data from post request
app.post('/', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / (height * height);
    res.send("Your BMI is " + result.toFixed(1));
});