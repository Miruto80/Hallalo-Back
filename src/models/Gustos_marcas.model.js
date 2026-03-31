import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Gustos_marcas = sequelize.define('Gustos_marcas', {
  Cod_marca: { type: DataTypes.INTEGER, primaryKey: true },
  Cedula_cl: { type: DataTypes.INTEGER, primaryKey: true },
  Puntos_m: { type: DataTypes.INTEGER }
}, { tableName: 'Gustos_marcas', timestamps: false });

export const associateGustos_marcas = ({ Marcas, Clientes }) => {
  Gustos_marcas.belongsTo(Marcas, { foreignKey: 'Cod_marca' });
  Gustos_marcas.belongsTo(Clientes, { foreignKey: 'Cedula_cl' });
};
