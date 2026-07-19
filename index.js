const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/add-blog", (req, res) => {
    const { title, content } = req.body;

    res.json({
        message: "Blog received successfully!",
        title,
        content
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});