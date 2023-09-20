import axios from "axios";

export async function chat(msgs){

   const res =  await axios.post(
        "https://api.openai.com/v1/chat/completions", 
    {
        model: "gpt-3.5-turbo",
        messages: 
        [
            {
                role:"system", 
                content:"Você é o mestre yoda de star wars e age e fala como ele"
            },
            ...msgs,
        ]
    },
    {
        headers:{
            Authorization: "Bearer " + process.env.API_KEY,
        }
    });

    return res.data;
}
