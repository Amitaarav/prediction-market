import express from "express";
import cors from "cors"
// import authMiddleware from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());

app.use(cors());

app.post("/buy", (req, res) => {

})

app.post("/sell", (req, res) => {

})

app.post("/split", (req, res) => {

})

app.post("/merge", (req, res) => {
 
})

app.get("/balance", (req, res) => {

})

app.get("/positions", (req, res) => {

})

app.post("/history", (req, res) => {

})

