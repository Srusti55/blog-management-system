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

// Function to Fetch and Display Blogs
function loadBlogs() {

    fetch("http://localhost:3000/blogs")
        .then((response) => response.json())
        .then((blogs) => {

            const blogList = document.getElementById("blogList");
            blogList.innerHTML = "";

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

                    <button onclick="deleteBlog(${blog.id})">
                        Delete
                    </button>

                    <hr>
                `;

                blogList.appendChild(blogCard);

            });

        })
        .catch((error) => {
            console.error("Error fetching blogs:", error);
        });

}

// Function to Delete Blog
function deleteBlog(id) {

    const confirmDelete = confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) {
        return;
    }

    fetch(`http://localhost:3000/delete-blog/${id}`, {
        method: "DELETE"
    })
        .then((response) => response.json())
        .then((data) => {

            alert(data.message);

            // Reload blogs
            loadBlogs();

        })
        .catch((error) => {
            console.error("Error deleting blog:", error);
        });

}

// Load blogs when page opens
loadBlogs();