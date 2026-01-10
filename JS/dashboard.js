document.addEventListener("DOMContentLoaded", function () {
  var totalAbonnements = document.getElementById("totalAbonnements");

  var abonnements = localStorage.getItem("abonnements");
  if (abonnements === null) {
    abonnements = 0;
  }

  if (totalAbonnements) {
    totalAbonnements.textContent = abonnements;
  }
});
