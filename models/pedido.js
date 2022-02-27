'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pelicula, { 
        foreignKey: 'peliculaId' 
      }); 
      this.belongsTo(models.Usuario, { 
        foreignKey: 'usuarioId' 
      });
    }
  }
  Pedido.init({
    peliculaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    fechaSalida: DataTypes.DATEONLY,
    fechaDevolucion: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};