// Get the modal element
const modal = document.getElementById("jobModal");

// Get all "Apply Now" buttons
const openButtons = document.querySelectorAll(".apply-btn");

// Get the close button inside the modal
const closeModal = document.querySelector(".close-modal");

// Add click event to each "Apply Now" button
openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex"; // Use flex to center the modal
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
