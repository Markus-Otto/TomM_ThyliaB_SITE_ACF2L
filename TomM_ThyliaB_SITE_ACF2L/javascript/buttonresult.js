// buttonresult.js


// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer le bouton
  var btn = document.getElementById('idB1');
  // Récupérer le modal
  var modal = document.getElementById('myModal1');

  // Ajouter un événement de clic au bouton
  btn.addEventListener('click', function () {
      // Afficher le modal
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
  });
});



// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer le bouton
  var btn = document.getElementById('idB2');
  // Récupérer le modal
  var modal = document.getElementById('myModal2');

  // Ajouter un événement de clic au bouton
  btn.addEventListener('click', function () {
      // Afficher le modal
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
  });
});


// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer le bouton
  var btn = document.getElementById('idB3');
  // Récupérer le modal
  var modal = document.getElementById('myModal3');

  // Ajouter un événement de clic au bouton
  btn.addEventListener('click', function () {
      // Afficher le modal
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
  });
});
