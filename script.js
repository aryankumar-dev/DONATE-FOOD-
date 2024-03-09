document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("foodDonationForm");
    const donationList = document.getElementById("donationList");

    form.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            const donorName = document.getElementById("donorName").value;
            const donorEmail = document.getElementById("donorEmail").value;
            const foodDescription = document.getElementById("foodDescription").value;

            // Simulate server-side interaction by adding the donation to the list.
            addDonationToList(donorName, donorEmail, foodDescription);

            // Clear the form fields after submission.
            form.reset();

            // Show a confirmation message to the user.
            showConfirmationMessage();
        }
    }

    function addDonationToList(name, email, description) {
        const donationItem = document.createElement("li");
        donationItem.innerHTML = `
            <div class="donation-info">
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Food Description:</strong> ${description}
            </div>
            <div class="donation-image">
                <img src="https://via.placeholder.com/150" alt="Food Donation">
            </div>
        `;
        donationItem.className = "donation";
        donationList.appendChild(donationItem);
    }

    function showConfirmationMessage() {
        const confirmationDiv = document.createElement("div");
        confirmationDiv.innerText = "Thank you for your donation!";
        confirmationDiv.className = "confirmation-message";
        document.body.appendChild(confirmationDiv);

        // Hide the confirmation message after 3 seconds.
        setTimeout(() => {
            confirmationDiv.remove();
        }, 3000);
    }
});

