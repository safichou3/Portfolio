const express = require('express');
const app = express();

// Utilisation de la variable d'environnement PORT ou 4000 par défaut
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
