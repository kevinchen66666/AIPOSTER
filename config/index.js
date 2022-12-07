const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openAI = new OpenAIApi(configuration);

module.exports = { configuration, openAI };
