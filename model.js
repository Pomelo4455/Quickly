const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config(); // This is used to hide the API key

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const port = process.env.PORT;
const openai = new OpenAIApi(configuration);

async function generateSummary(data) {
  const response = await openai.createCompletion({
    model: "text-davinci-003", // This is the model we are using, it can be easily changed for "davinci", "GPT-3.5-turbo", and many more.
    prompt:
      "Can you tell me what the website is about? Here is the data: " + data,
    temperature: 0,
    max_tokens: 50,
  });
  console.log(response.data.choices[0].text); // The API returns a huge object, we only need the text inside the choices array
  return response.data.choices[0].text;
}

module.exports = generateSummary;
