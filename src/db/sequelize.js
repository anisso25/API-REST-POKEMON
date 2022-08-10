const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const UserModel = require('../models/user')
const pokemons = require('./mock-pokemon')
const bcrypt = require('bcrypt')

// Connection base de données
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

// Importer le Models Pokemon
const Pokemon = PokemonModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

// synchronisation avec la base de données 
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types.join(),
      }).then(pokemon => console.log(pokemon.toJSON()))
    })

    bcrypt.hash('123', 10)
    .then(hash => {
      User.create({
        username: 'anis',
        password:  hash
    })
  }).then(username => console.log(username.toJSON()))

    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Pokemon, User
}