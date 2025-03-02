document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".see-more-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.previousElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = "See Less";
            } else {
                content.style.display = "none";
                this.textContent = "See More";
            }
        });
    });
});