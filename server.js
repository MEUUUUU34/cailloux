const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Configuration des routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/location/:id', (req, res) => {
  const id = req.params.id;
  // Récupérez les informations de localisation pour l'identifiant donné depuis votre base de données ou votre système de stockage.
  // Par exemple, nous allons simplement renvoyer des informations de localisation fictives pour l'exemple :
  const location = {
    latitude: 48.8566,
    longitude: 2.3522,
  };
  res.json(location);
});

app.use(express.static('public'));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
