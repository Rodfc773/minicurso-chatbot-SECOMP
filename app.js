import express from "express";
import "dotenv/config";
import { chat } from "./src/js/gpt.js";

const app = express();

app.use(express.static("json"));
app.use("/",express.static("public/Views"));

app.get("/chat", async (req, res) => {

    const {content} = req.query;

    if(!content){
        res.status(400).send("The data in content not exists");
    }

    const answer = await chat(content);
    const assistantMessage = answer.choices[0].message

    res.send(assistantMessage);
})
app.listen(3000, () => {

    console.log("server running in port 3000: http://localhost:3000");
});