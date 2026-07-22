document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        const title = document.getElementById("title");
        const content = document.getElementById("content");

        form.addEventListener("submit", function (event) {

            // event.preventDefault();

            if (title.value.trim() === "") {
                alert("Please enter the blog title.");
                title.focus();
                return;
            }

            if (content.value.trim() === "") {
                alert("Please enter the blog content.");
                content.focus();
                return;
            }

        });

    }

    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {

        fetch("/blogs")
            .then(response => response.json())
            .then(data => {

                const blogList = document.getElementById("blog-list");

                if (!blogList) return;

                blogList.innerHTML = "";

                data.forEach(blog => {

                    const div = document.createElement("div");

                    div.innerHTML = `
                        <h4>${blog.title}</h4>
                        <p>${blog.content}</p>
                        <hr>
                    `;

                    blogList.appendChild(div);

                });

            });

    }

});