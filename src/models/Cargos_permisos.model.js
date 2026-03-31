import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Cargos_permisos = sequelize.define('Cargos_permisos', {
  Cod_cargo: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_permiso: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Cargos_permisos', timestamps: false });

export const associateCargos_permisos = ({ Cargos, Permisos }) => {
  Cargos_permisos.belongsTo(Cargos, { foreignKey: 'Cod_cargo' });
  Cargos_permisos.belongsTo(Permisos, { foreignKey: 'Cod_permiso' });
};
