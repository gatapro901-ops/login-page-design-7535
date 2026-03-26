
      // Import necessary libraries and set up the document
      document.addEventListener('DOMContentLoaded', () => {
         // Get all the input fields and the login button
         const emailInput = document.getElementById('email');
         const passwordInput = document.getElementById('password');
         const confirmPasswordInput = document.getElementById('confirm-password');
         const loginButton = document.getElementById('login-button');

         // Add event listeners to the input fields for animation
         emailInput.addEventListener('focus', () => {
            emailInput.classList.add('animate-input');
         });
         emailInput.addEventListener('blur', () => {
            emailInput.classList.remove('animate-input');
         });

         passwordInput.addEventListener('focus', () => {
            passwordInput.classList.add('animate-input');
         });
         passwordInput.addEventListener('blur', () => {
            passwordInput.classList.remove('animate-input');
         });

         confirmPasswordInput.addEventListener('focus', () => {
            confirmPasswordInput.classList.add('animate-input');
         });
         confirmPasswordInput.addEventListener('blur', () => {
            confirmPasswordInput.classList.remove('animate-input');
         });

         // Add event listener to the login button for animation and form submission
         loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Check if the input fields are valid
            if (validateInputFields()) {
               // Animate the login button
               loginButton.classList.add('animate-button');
               // Simulate a login request
               setTimeout(() => {
                  // Remove the animation class
                  loginButton.classList.remove('animate-button');
                  // Save the user data to local storage
                  saveUserData();
                  // Redirect the user to the dashboard
                  window.location.href = 'dashboard.html';
               }, 2000);
            } else {
               // Display an error message
               displayErrorMessage('البيانات المدخلة غير صحيحة');
            }
         });

         // Function to validate the input fields
         function validateInputFields() {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (email === '' || password === '' || confirmPassword === '') {
               return false;
            }

            if (password !== confirmPassword) {
               return false;
            }

            return true;
         }

         // Function to save the user data to local storage
         function saveUserData() {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
         }

         // Function to display an error message
         function displayErrorMessage(message) {
            const errorMessageElement = document.getElementById('error-message');
            errorMessageElement.textContent = message;
            errorMessageElement.classList.add('animate-error-message');
            setTimeout(() => {
               errorMessageElement.classList.remove('animate-error-message');
            }, 3000);
         }

         // Animate the page entry
         const heroSection = document.getElementById('hero-section');
         heroSection.classList.add('animate-hero-section');

         // Add event listener to the window for page entry animation
         window.addEventListener('load', () => {
            heroSection.classList.remove('animate-hero-section');
         });
      });
   