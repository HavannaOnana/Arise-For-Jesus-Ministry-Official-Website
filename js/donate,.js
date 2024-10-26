// Function to animate a single progress bar to a specific target percentage
function animateProgressBar(barId, targetPercentage) {
  let width = 0; // Starting width percentage
  const progressBar = document.getElementById(barId);

  // Incrementally increase the width up to the target percentage
  const interval = setInterval(() => {
    if (width >= targetPercentage) {
      clearInterval(interval); // Stop when reaching the target percentage
    } else {
      width++; // Increase width by 1%
      progressBar.style.width = width + "%";
      progressBar.textContent = width + "%"; // Display the current percentage
    }
  }, 50); // Adjust speed (50ms interval for smooth animation)
}

// Start animations for both progress bars with different target percentages
window.onload = () => {
  animateProgressBar("myBar1", 30); // Animate the first bar to 30%
  animateProgressBar("myBar2", 50); // Animate the second bar to 50%
};
