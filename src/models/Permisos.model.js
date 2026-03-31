import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import { Modulos } from './Modulos.model.js';
import { Cargos } from './Cargos.model.js';

export const Permisos = sequelize.define('Permisos', {
  Cod_permiso: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cod_modulo: { type: DataTypes.INTEGER, allowNull: false },
  N_permiso: { type: DataTypes.STRING(100) }
}, { tableName: 'Permisos', timestamps: false });

export const associatePermisos = ({ Modulos, Cargos, Cargos_permisos }) => {
  Permisos.belongsTo(Modulos, { foreignKey: 'FK_Cod_modulo' });
  Permisos.belongsToMany(Cargos, { through: Cargos_permisos, foreignKey: 'Cod_permiso', otherKey: 'Cod_cargo' });
};
