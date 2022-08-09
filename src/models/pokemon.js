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
      validator: {
        notNull: { msg: 'Le nom est une propriété requis.' },
        isEmpty: { msg: 'Le nom est une propriété requis. l\'espace n\'est pas un caractére valide.' }
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de vie' },
        notNull: { msg: 'Les points de vie sont une propriété requis.' }
      }
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de force' },
        notNull: { msg: 'Les points de force sont une propriété requis.' }
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validator: {
        notNull: { msg: 'L\'image du pokemon est indesponssable' },
        isUrl: { msg: 'Ce chemps doit contenir un URL de l\'image' }
      }
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false
/*       get() {
        return this.getDataValue('types').split(',')
      },
      set(types) {
        this.setDataValue('types', types.join())
      } */
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false,
    deletedAt: false
  })
}