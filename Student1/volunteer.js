// Filter Volunteer Programs
document.getElementById("program-filter").addEventListener("change", function() {
    let category = this.value;
    let programs = document.querySelectorAll(".program-card");

    programs.forEach(program => {
        if (category === "all" || program.dataset.category === category) {
            program.style.display = "block";
        } else {
            program.style.display = "none";
        }
    });
});

// Volunteer Sign-Up Modal
let modal = document.getElementById("signup-modal");
let joinButtons = document.querySelectorAll(".join-btn");
let closeModal = document.querySelector(".close-btn");
let cancelButton = document.querySelector(".cancel-btn");


// Open modal
joinButtons.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

// Close modal on close button
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal on cancel button
cancelButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function toggleReview(event, link) {
    event.preventDefault(); // Stops page from jumping to the top

    let moreText = link.previousElementSibling; // Selects the hidden text

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        link.textContent = "See Less";

        moreText.style.display = "none";
        link.textContent = "See More";
    }
}



