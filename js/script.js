"use strict"; // Enable strict mode to catch common coding mistakes

// Select the modal element from the HTML document with the class "modal"
const modal = document.querySelector(".modal");

// Select the overlay element from the HTML document with the class "overlay"
const overlay = document.querySelector(".overlay");

// Select the close button for the modal with the class "close-modal"
const btnCloseModal = document.querySelector(".close-modal");

// Select all elements with the class "show-modal" (buttons that open the modal)
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open the modal and overlay
const openModal = function () {
  modal.classList.remove("hidden"); // Remove the "hidden" class to display the modal
  overlay.classList.remove("hidden"); // Remove the "hidden" class to display the overlay
};

// Function to close the modal and overlay
const closeModal = function () {
  modal.classList.add("hidden"); // Add the "hidden" class to hide the modal
  overlay.classList.add("hidden"); // Add the "hidden" class to hide the overlay
};

// Function to handle the Escape key press event
const keyPress = function (event) {
  if (event.key === "Escape") {
    // Check if the pressed key is the Escape key
    if (!modal.classList.contains("hidden")) {
      // Check if the modal is currently open
      closeModal(); // Call the closeModal function to close the modal
    }
  }
};

// Loop through all elements with the class "show-modal" and add a click event listener to each
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal); // When clicked, open the modal
}

// Add a click event listener to the close button to close the modal
btnCloseModal.addEventListener("click", closeModal);

// Add a click event listener to the overlay to close the modal when the overlay is clicked
overlay.addEventListener("click", closeModal);

// Add a keydown event listener to the entire document to handle the Escape key press
document.addEventListener("keydown", keyPress);
