import axios from "axios";

export async function chat(msg){

   const res =  await axios.post(
        "https://api.openai.com/v1/chat/completions", 
    {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: msg,
            }
        ]
    },
    {
        headers:{
            Authorization: "Bearer " + process.env.API_KEY,
        }
    });

    return res.data;
}
