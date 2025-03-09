function setRating(value) {
    let stars = document.querySelectorAll('.rating span');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < value);
    });
}

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let isValid = true;

    function validateField(id, errorId) {
        let field = document.getElementById(id);
        let error = document.getElementById(errorId);
        if (!field.value.trim()) {
            field.classList.add('error');
            error.style.display = 'block';
            isValid = false;
        } else {
            field.classList.remove('error');
            error.style.display = 'none';
        }
    }
    // If all fields are valid, show the popup
    if (isValid) {
        document.getElementById('successModal').style.display = 'flex'; // Show modal
    }
});

// Close modal function
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

