import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Modulos = sequelize.define('Modulos', {
  Cod_modulo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  N_modulo: { type: DataTypes.STRING(100) }
}, { tableName: 'Modulos', timestamps: false });

export const associateModulos = ({ Permisos }) => {
  Modulos.hasMany(Permisos, { foreignKey: 'FK_Cod_modulo' });
};
