document.getElementById("volunteerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload
  document.getElementById("volunteerForm").style.display = "none";
  document.getElementById("thankYouMsg").style.display = "block";
});
