const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const openAIRoutes = require("./routes/openai.routes");

const PORT = process.env.PORT || 8000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/open-ai", openAIRoutes);

app.listen(PORT, console.log(`listening on port ${PORT}...`));
