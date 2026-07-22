const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Blog Management System");
});


app.post("/add-blog", (req, res) => {

    const blog = req.body;

    res.send({
        message: "Blog Added Successfully",
        data: blog
    });

});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});