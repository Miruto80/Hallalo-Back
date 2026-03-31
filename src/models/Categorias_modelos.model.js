import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Categorias_modelos = sequelize.define('Categorias_modelos', {
  Cod_sc_categoria: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_modelo: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Categorias_modelos', timestamps: false });

export const associateCategorias_modelos = ({ S_categorias, Modelos }) => {
  Categorias_modelos.belongsTo(S_categorias, { foreignKey: 'Cod_sc_categoria' });
  Categorias_modelos.belongsTo(Modelos, { foreignKey: 'Cod_modelo' });
};
