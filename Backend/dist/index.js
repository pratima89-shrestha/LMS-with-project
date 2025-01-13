"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //fetch the value from .env file
const port = process.env.PORT || 500;
const app = (0, express_1.default)();
//get api
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/api', (req, res) => {
    res.send({ name: 'pratima', age: 25 });
});
app.listen(port, () => {
    console.log(`Server connected successfully to the port 500`);
});
