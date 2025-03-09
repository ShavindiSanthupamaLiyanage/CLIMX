function openDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "block";
}

function closeDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("#nav ul li a.anchor");

    function updateActiveLink() {
        let scrollPosition = window.scrollY;

        links.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));

            if (section.offsetTop <= scrollPosition + 100 && section.offsetTop + section.offsetHeight > scrollPosition) {
                links.forEach(l => l.classList.remove("active")); // Remove active from all links
                link.classList.add("active"); // Add active to the current link
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});