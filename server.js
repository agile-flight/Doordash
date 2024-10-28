// server.js
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const doordash = require("./routes/api/doordash");

const PORT = 4000;
const app = express();

// CORS setup
app.use(
    cors({
        origin: "http://localhost:4000",
        credentials: true
    })
);

app.use(express.static("public"));
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Body parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Morgan and Helmet setup
app.use(morgan("dev"));
app.use(helmet());


// Define routes
app.use("/routes/api", doordash); // Make sure to route correctly

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
