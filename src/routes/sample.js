let data = { 
    model: "some model",
    messages: [{role: "user"}],
    temperature: 0.7
}

const content = "say it is a test"


data.messages[0].content = content

console.log(data)