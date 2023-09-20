import express from "express";
import "dotenv/config";
import { chat } from "./src/js/gpt.js";

const app = express();

app.use(express.static("json"));
app.use("/",express.static("public/Views"));

const chats = [];
app.get("/chat", async (req, res) => {

    let {content , id} = req.query;

    if(!content){
        res.status(400).send("The data in content not exists");
    }

    if (!id) {
        
        //novo chat

        const length = chats.push([])
        id = length - 1;
    }

    chats[id].push({ content : content, role: "user"});

    const answer = await chat(chats[id]);
    const assistantMessage = answer.choices[0].message;

    chats[id].push(assistantMessage)

    res.send(
        {
            ...assistantMessage,
            id,
        });
})
app.listen(3000, () => {

    console.log("server running in port 3000: http://localhost:3000");
});