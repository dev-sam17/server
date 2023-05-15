const axios = require('axios');


const API_URL = "https://api.openai.com/v1/chat/completions"

async function getResponse(req, res) {
    let data = {
    model: "gpt-3.5-turbo",
    messages: [{role: "user"}],
    temperature: 0.7
  }

    const body = req.body
    data.messages[0].content = body.prompt
    console.log(data)
   const config = {
    headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    }
   }

   

  const response = await axios.post(API_URL, data, config)
  const choices = response.data.choices[0]
  console.log(choices.message.content)
  res.status(200).send(choices.message.content)
}

module.exports = {
    getResponse,
}
