// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Restrict name fields to letters only
    const nameFields = document.querySelectorAll("#first-name, #last-name");
    nameFields.forEach((field) => {
        field.addEventListener("input", function (event) {
            const lettersOnly = /^[A-Za-z\s]*$/;
            if (!lettersOnly.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, "");
            }
        });
    });

    // Restrict phone number field to numbers only
    const phoneField = document.getElementById("phone");
    phoneField.addEventListener("input", function (event) {
        const numbersOnly = /^[0-9]*$/;
        if (!numbersOnly.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const packageSelected = document.getElementById("package").value;
        const date = document.getElementById("date").value;

        // Validate form fields
        if (!firstName || !lastName || !email || !phone || !packageSelected || !date) {
            alert("Please fill out all fields before submitting the form.");
            return;
        }

        // Validate email format (must include @)
        if (!email.includes("@")) {
            alert("Please enter a valid email address with an '@' symbol.");
            return;
        }

        // Success message
        alert("Form submitted successfully! We'll get in touch with you soon.");

        // Optionally, reset the form
        form.reset();
    });
});
