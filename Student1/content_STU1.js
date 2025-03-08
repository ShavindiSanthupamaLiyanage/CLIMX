function openDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "block";
}

function closeDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "none";
}

//active page hover
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links

    function highlightNav() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for navbar height
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove("active"); // Remove active class
                    if (link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active"); // Add active class
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", highlightNav);
});
