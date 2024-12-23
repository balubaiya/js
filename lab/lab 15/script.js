document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
  
    let isValid = true;
  
    // Email Validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Age Validation
    const age = parseInt(document.getElementById("age").value, 10);
    const ageError = document.getElementById("age-error");
    if (isNaN(age) || age < 1 || age > 120) {
      ageError.textContent = "Age must be between 1 and 120.";
      isValid = false;
    } else {
      ageError.textContent = "";
    }
  
    // Password Strength Validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.textContent = "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  
    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirm-password").value;
    const confirmPasswordError = document.getElementById("confirm-password-error");
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }
  
    // Zip Code Validation
    const zip = document.getElementById("zip").value;
    const zipError = document.getElementById("zip-error");
    const zipPattern = /^\d{5}(-\d{4})?$/;
    if (!zipPattern.test(zip)) {
      zipError.textContent = "Invalid zip code format (e.g., 12345 or 12345-6789).";
      isValid = false;
    } else {
      zipError.textContent = "";
    }
  
    // URL Validation
    const url = document.getElementById("url").value;
    const urlError = document.getElementById("url-error");
    if (url && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(url)) {
      urlError.textContent = "Invalid URL format.";
      isValid = false;
    } else {
      urlError.textContent = "";
    }
  
    // Date Validation
    const date = new Date(document.getElementById("date").value);
    const dateError = document.getElementById("date-error");
    if (date > new Date()) {
      dateError.textContent = "Date cannot be in the future.";
      isValid = false;
    } else {
      dateError.textContent = "";
    }
  
    // File Size Validation
    const file = document.getElementById("file").files[0];
    const fileError = document.getElementById("file-error");
    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file && file.size > maxSize) {
      fileError.textContent = "File size must be less than 2MB.";
      isValid = false;
    } else {
      fileError.textContent = "";
    }
  
    // Country Selection Validation
    const country = document.getElementById("country").value;
    const countryError = document.getElementById("country-error");
    if (!country) {
      countryError.textContent = "Please select a country.";
      isValid = false;
    } else {
      countryError.textContent = "";
    }
  
    // Terms and Conditions Validation
    const terms = document.getElementById("terms").checked;
    const termsError = document.getElementById("terms-error");
    if (!terms) {
      termsError.textContent = "You must agree to the terms and conditions.";
      isValid = false;
    } else {
      termsError.textContent = "";
    }
  
    // Final Submission
    if (isValid) {
      alert("Form submitted successfully!");
      // You can proceed with form submission (e.g., send data to server)
    }
  });
  