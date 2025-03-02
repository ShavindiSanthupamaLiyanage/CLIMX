function openDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "block";
}

function closeDetails(event, id) {
    event.preventDefault(); // Prevents page from jumping to top
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    function highlightNav() {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Smooth scroll with offset
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -80; // Offset to align with the top of the section
                const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });

    window.addEventListener("scroll", highlightNav);
});
