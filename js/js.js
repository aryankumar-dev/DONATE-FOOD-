
    document.addEventListener("DOMContentLoaded", function() {
        var phoneInput = document.getElementById('phone');

        phoneInput.addEventListener('input', function() {
            var inputValue = this.value;
            // Check if the input value contains non-numeric characters
            if (!/^\d*$/.test(inputValue)) {
                // If non-numeric characters are found, clear the input value
                this.value = inputValue.replace(/\D/g, '');
            }
        });

        // Prevent form submission if the phone number contains non-numeric characters
        document.querySelector('form').addEventListener('submit', function(event) {
            var inputValue = phoneInput.value;
            if (!/^\d*$/.test(inputValue)) {
                // If non-numeric characters are found, prevent form submission
                event.preventDefault();
                alert("Please enter only numbers for the phone number.");
            }
        });
    });