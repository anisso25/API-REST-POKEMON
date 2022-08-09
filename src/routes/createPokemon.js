/* const { ValidationError } = require('sequelize/types') */
const { Pokemon } = require('../db/sequelize')

  
module.exports = (app) => {
  app.post('/api/pokemons', (req, res) => {
    Pokemon.create(req.body)
      .then(pokemon => {
        const message = `Le pokémon ${req.body.name} a bien été crée.`
        res.json({ message, data: pokemon })
      })
/*       .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `La liste des pokémons n'a pas pu étre ajouté. Réssayez dans quelque instants.`
        res.status(500).json({ message, data: error })
      }) */
  })
}