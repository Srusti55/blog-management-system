// Contact Form Validation
const form = document.getElementById("blogForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all the fields.");
    } else {
        alert("Form Submitted Successfully!");
    }
});

// Fetch and Display Blogs
fetch("http://localhost:3000/blogs")
    .then((response) => response.json())
    .then((blogs) => {
        const blogList = document.getElementById("blogList");

        if (blogs.length === 0) {
            blogList.innerHTML = "<p>No blogs available.</p>";
            return;
        }

        blogs.forEach((blog) => {
            const blogCard = document.createElement("div");

            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p><strong>Author:</strong> ${blog.author}</p>
                <p>${blog.description}</p>
                <hr>
            `;

            blogList.appendChild(blogCard);
        });
    })
    .catch((error) => {
        console.error("Error fetching blogs:", error);
    });