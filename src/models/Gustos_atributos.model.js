import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Gustos_atributos = sequelize.define('Gustos_atributos', {
  Cod_atributos: { type: DataTypes.INTEGER, primaryKey: true },
  Cedula_cl: { type: DataTypes.INTEGER, primaryKey: true },
  Puntos_a: { type: DataTypes.INTEGER }
}, { tableName: 'Gustos_atributos', timestamps: false });

export const associateGustos_atributos = ({ Atributos, Clientes }) => {
  Gustos_atributos.belongsTo(Atributos, { foreignKey: 'Cod_atributos' });
  Gustos_atributos.belongsTo(Clientes, { foreignKey: 'Cedula_cl' });
};
