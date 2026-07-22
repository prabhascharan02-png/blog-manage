const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let blogs = [];

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

    console.log(req.body);

    blogs.push({
        title,
        content
    });

    res.json({
        message: "Blog added successfully!",
        blogs
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});