import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Gustos_categorias = sequelize.define('Gustos_categorias', {
  Cod_categoria: { type: DataTypes.INTEGER, primaryKey: true },
  Cedula_cl: { type: DataTypes.INTEGER, primaryKey: true },
  Puntos_c: { type: DataTypes.INTEGER }
}, { tableName: 'Gustos_categorias', timestamps: false });

export const associateGustos_categorias = ({ Categorias, Clientes }) => {
  Gustos_categorias.belongsTo(Categorias, { foreignKey: 'Cod_categoria' });
  Gustos_categorias.belongsTo(Clientes, { foreignKey: 'Cedula_cl' });
};
