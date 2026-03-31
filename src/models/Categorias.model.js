import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Categorias = sequelize.define('Categorias', {
  Categoria_cod: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  N_categoria: { type: DataTypes.STRING(100) }
}, { tableName: 'Categorias', timestamps: false });

export const associateCategorias = () => {
  const { S_categorias, Clientes } = sequelize.models;

  Categorias.hasMany(S_categorias, { foreignKey: 'FK_Categoria' });
  S_categorias.belongsTo(Categorias, { foreignKey: 'FK_Categoria' });

  Categorias.belongsToMany(Clientes, { through: 'Gustos_categorias', foreignKey: 'Cod_categoria', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Categorias, { through: 'Gustos_categorias', foreignKey: 'Cedula_cl', otherKey: 'Cod_categoria' });
};
