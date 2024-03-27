document.getElementById("medicationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";

  setTimeout(function() {
      confirmationMessage.style.display = "none";
      document.getElementById("medicationForm").reset();
  }, 5000);
}); 
