const { openAI } = require("../config");

const generateImage = async (req, res) => {
  const { prompt, size } = req.body || {};

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openAI.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(201).json({
      success: true,
      data: imageUrl,
    });
  } catch (err) {
    console.error("there is an error", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { generateImage };
