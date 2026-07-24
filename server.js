const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve HTML, CSS and JS files
app.use(express.static(path.join(__dirname)));

// Store blogs in JavaScript array
let blogs = [];

// Add Blog API
app.post("/add-blog", (req, res) => {
    const { title, author, description } = req.body;

    if (!title || !author || !description) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const blog = {
        id: blogs.length + 1,
        title,
        author,
        description
    };

    blogs.push(blog);

    res.status(201).json({
        message: "Blog Added Successfully",
        blog
    });
});

// Get All Blogs API
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// Update Blog API (Day 8)
app.put("/update-blog/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blog.title = req.body.title;
    blog.author = req.body.author;
    blog.description = req.body.description;

    res.json({
        message: "Blog Updated Successfully",
        blog
    });
});

// Test Route
app.get("/test", (req, res) => {
    res.send("Test route is working");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});