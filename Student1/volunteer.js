// Filter Volunteer Programs
document.getElementById("program-filter").addEventListener("change", function () {
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

function toggleReview(event, element) {
    event.preventDefault(); // Prevent page from jumping when clicking the link

    let moreText = element.previousElementSibling; // Get the span containing additional text
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // Show more text
        element.textContent = "See Less"; // Change button text
    } else {
        moreText.style.display = "none"; // Hide text again
        element.textContent = "See More"; // Reset button text
    }
}

// Volunteer Sign-Up Modal (with null checks)
let modal = document.getElementById("signup-modal");
let joinButtons = document.querySelectorAll(".join-btn");
let closeModal = document.querySelector(".close-btn");
let cancelButton = document.querySelector(".cancel-btn");

// Ensure elements exist before adding event listeners
if (modal) {
    joinButtons.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Feedback Submission Modal (with null checks)
let feedbackModal = document.getElementById("feedback-modal");
let closeFeedback = document.querySelector(".close-feedback");
let feedbackForm = document.getElementById("feedback-form");

// Ensure elements exist before adding event listeners
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show the feedback modal
        if (feedbackModal) {
            feedbackModal.style.display = "block";
        }
    });
}

if (closeFeedback) {
    closeFeedback.addEventListener("click", function () {
        if (feedbackModal) {
            feedbackModal.style.display = "none";
        }
    });
}

// Close feedback modal when clicking outside
window.addEventListener("click", function (event) {
    if (event.target === feedbackModal) {
        feedbackModal.style.display = "none";
    }
});