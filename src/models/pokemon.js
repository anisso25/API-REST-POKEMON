// types de pokemon valide a ajouter dans la base de donnée
const validTypes = ['Plante','Poison','Feu','Eau','Insecte','Vol','Normal','Electrik','Fée']


// Models Pokemon
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: false,
      unique: {
        msg: 'Le nom est deja pris.'
      },
      validate: {
        notNull: { msg: 'Les points de vie sont une propriété requis.' }
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Les points de vie sont une propriété requis.' },
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de vie' },
        max:{
          args: [999],
          msg : 'Vous avez depasser la limite autorisé qui est de (> 999)'
        },
        min:{
          args: [0],
          msg : 'Vous avez depasser la limite autorisé qui est de (1 > )'
        }
      }
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Les points de force sont une propriété requis.' },
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de force' },
        max:{
          args: [99],
          msg : 'Vous avez depasser la limite autorisé qui est de (> 99)'
        },
        min:{
          args: [0],
          msg : 'Vous avez depasser la limite autorisé qui est de (1 > )'
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'L\'image du pokemon est indesponssable' },
        isUrl: { msg: 'Ce chemps doit contenir un URL de l\'image' }
      }
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isTypesValid(value) {
          if(!value) {
            throw new Error('Un pokémon doit au moin avoir un type.')
          }
          if(value.split(',').length > 3) {
            throw new Error('Un pokémon ne peux pas avoir plus de trois types.')
          }
          value.split(',').forEach(type => {
            if(!validTypes.includes(type)) {
              throw new Error(`Le type d'un pokémon doit appartenir à la liste suivante : ${validTypes}`)
            }
          });
        }
      }
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false,
    deletedAt: false
  })
}