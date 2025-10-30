// Video Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const videoModal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");
  const campusVideo = document.getElementById("campusVideo");
  const jelajahiContainer = document.querySelector(
    ".jelajahi-kampus-container"
  );

  // Open modal when play button is clicked
  playButton.addEventListener("click", openModal);
  jelajahiContainer.addEventListener("click", openModal);

  // Close modal when X is clicked
  closeModal.addEventListener("click", closeModalFunc);

  // Close modal when clicking outside the video
  videoModal.addEventListener("click", function (e) {
    if (e.target === videoModal) {
      closeModalFunc();
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoModal.style.display === "block") {
      closeModalFunc();
    }
  });

  function openModal(e) {
    e.stopPropagation();
    videoModal.style.display = "block";
    campusVideo.play(); // Auto-play video when modal opens
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeModalFunc() {
    videoModal.style.display = "none";
    campusVideo.pause(); // Pause video
    campusVideo.currentTime = 0; // Reset video to start
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
});
