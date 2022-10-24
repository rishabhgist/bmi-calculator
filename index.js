// Imports
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Open server for listing port:3000
app.listen(3000);

// Sending get reques for index.html 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});