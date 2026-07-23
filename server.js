const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.json());


let blogs = [];


app.get("/", (req, res) => {
    res.send("THIS IS MY NEW SERVER");
});


app.post("/add-blog", (req, res) => {

    const blog = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    };

    blogs.push(blog);

    res.json({
        message: "Blog Added Successfully",
        blog: blog
    });

});


app.get("/blogs", (req, res) => {
    res.json(blogs);
});

 app.get("/test", (req, res) => {
    res.send("Test route is working");
});

console.log("Server file loaded");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

