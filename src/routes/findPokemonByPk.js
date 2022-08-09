const { Pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/pokemons/:id', (req, res) => {
    Pokemon.findByPk(req.params.id)
      .then(pokemon => {
        const message = 'Un pokémon a bien été trouvé.'
        res.json({ message, data: pokemon })
      })
      .catch( error => {
        const message = 'Le pokémon n\'a pas pu étre récupéré. Ressayez dans quelques instants.'
        res.status(500).json({message, date: error})
    })
  })
}