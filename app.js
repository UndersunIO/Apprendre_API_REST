// Recuperation du paquet express
const express = require('express');

// creation d'une instance d'express
const app = express();
// Definition d'un constante comportant le port d'ecoute
const port = 3000;
/*
 definition de point de terminaison de l'application
 get prend en parametre 2 elements: 
    - le chemin de la requetes/route
    - Une fonction qui a 2 arguments en entrée  = req et res
 - argument req: permet de recuperer un objet request correspondant a la requete recu en entree par le point de terminaison
 - objet res: correspond a la response = l'objet qu'on doit renvoyer depuis express a notre client
 - utilisation methode send de l'objet res pour envoyer un message au client sur localhost:3000/

*/
app.get('/', (req, res) => res.send('Hello  express nodemon!'))


// Declaration d'un nouveau point de terminaison efficient et dynamique

app.get('/api/pokemons/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Pokemon numero ${id}`)
})

// demarre l'api REST sur le port 3000 + message de confirmation
app.listen(port, () => console.log(`Application node sur : http://localhost:${port} !`))

