'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Pedido, { //Le decimos que puede tener muchos elementos Pedido
        foreignKey: 'peliculaId' //usando como fk el atributo 'peliculaId'
      });
    }u
  }
  Pelicula.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
    popularity: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};