// JavaScript for Portfolio Website

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can perform validation here if needed

    // Display a simple alert with form data
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear form inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}


// Attach event listener to the form
document.querySelector('form').addEventListener('submit', handleSubmit);
