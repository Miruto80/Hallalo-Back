import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Empleados = sequelize.define('Empleados', {
  Cedula_em: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  FK_Cod_comercio: { type: DataTypes.INTEGER, allowNull: false },
  FK_Cod_cargo: { type: DataTypes.INTEGER, allowNull: false },
  Nombre_em: { type: DataTypes.STRING(100) }
}, { tableName: 'Empleados', timestamps: false });

export const associateEmpleados = ({ Comercios, Cargos, Entradas, Salidas }) => {
  Empleados.belongsTo(Comercios, { foreignKey: 'FK_Cod_comercio' });
  Empleados.belongsTo(Cargos, { foreignKey: 'FK_Cod_cargo' });
  Empleados.hasMany(Entradas, { foreignKey: 'FK_Cedula_em' });
  Empleados.hasMany(Salidas, { foreignKey: 'FK_Cedula_em' });
};
