document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
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

        //alert("Blog submitted successfully!");

        form.reset();

    });

});