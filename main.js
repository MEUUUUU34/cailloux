// Initialisez la carte avec une vue et un niveau de zoom par défaut
var map = L.map('map').setView([51.505, -0.09], 13);

// Ajoutez une couche de tuile pour afficher la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

// Ajoutez les gestionnaires d'événements pour les clics sur les marqueurs
marker1.on('click', function() {
    window.location.href = 'redirection1.html';
  });
  
  marker2.on('click', function() {
    window.location.href = 'redirection2.html';
  });
  
  marker3.on('click', function() {
    window.location.href = 'redirection3.html';
  });
  
  marker4.on('click', function() {
    window.location.href = 'redirection4.html';
  });
  
  marker5.on('click', function() {
    window.location.href = 'redirection5.html';
  });
  