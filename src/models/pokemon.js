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
      validate: {
        notNull: { msg: 'Les points de vie sont une propriété requis.' }
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Les points de vie sont une propriété requis.' },
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de vie' }
      }
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Les points de force sont une propriété requis.' },
        isInt: { msg: 'Utilisez uniquement des nombres entriers pour les points de force' }
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
      allowNull: false
/*    get() {
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