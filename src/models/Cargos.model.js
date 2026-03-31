import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Cargos = sequelize.define('Cargos', {
  Cod_cargo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cod_comercio: { type: DataTypes.INTEGER, allowNull: false },
  N_cargo: { type: DataTypes.STRING(100) }
}, { tableName: 'Cargos', timestamps: false });

export const associateCargos = () => {
  const { Comercios, Empleados, Permisos } = sequelize.models;

  Cargos.belongsTo(Comercios, { foreignKey: 'FK_Cod_comercio' });
  Comercios.hasMany(Cargos, { foreignKey: 'FK_Cod_comercio' });

  Cargos.hasMany(Empleados, { foreignKey: 'FK_Cod_cargo' });
  Empleados.belongsTo(Cargos, { foreignKey: 'FK_Cod_cargo' });

  Cargos.belongsToMany(Permisos, { through: 'Cargos_permisos', foreignKey: 'Cod_cargo', otherKey: 'Cod_permiso' });
  Permisos.belongsToMany(Cargos, { through: 'Cargos_permisos', foreignKey: 'Cod_permiso', otherKey: 'Cod_cargo' });
};
